import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ToastController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BLE } from '@ionic-native/ble/ngx';
import { BleService } from '../services/ble.service';

@Component({
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.page.html',
  styleUrls: ['./bluetooth.page.scss'],
})
export class BluetoothPage implements OnInit {

  devices: any[] = [];
  statusMessage:String;
  adv:Uint8Array;

  constructor(private router: Router,
    private toastCtrl: ToastController,
    private ble:BLE,
    private ngZone: NgZone,
    private bleService: BleService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    console.log('ionViewDidEnter');
    this.scan();
  }

  /*ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.scan();
  }*/

  scan() {
    this.setStatus('Scanning for  SmartHVAC Devices');
    this.devices = [];  // clear list

    this.ble.scan(['D0AF'], 10).subscribe(
      device => this.onDeviceDiscovered(device),
      error => this.scanError(error)
    );

    setTimeout(this.setStatus.bind(this), 10000, 'Scan complete');
  }

  onDeviceDiscovered(device) {
    // console.log('Discovered ' + JSON.stringify(device, null, 2));
    // this.presentAlertConfirm('Discovered ' + JSON.stringify(device, null, 2));
    this.ngZone.run(() => {
      console.log(' Name is ' + device.name);
      // if (device.name.includes("RVACSD ")) {
      this.devices.push(device);
      const mfgData = new Uint8Array(device.advertising.kCBAdvDataManufacturerData);
      this.adv = new Uint8Array(device.advertising.kCBAdvDataManufacturerData);
      console.log(' Name is ' + device.name + ' Manufacturer Data is', mfgData);
      // } else {
      console.log('Cannot Put\n');
      // }
    });
  }

  // If location permission is denied, you'll end up here
  async scanError(error) {
    this.setStatus('Error ' + error);
    const toast = await this.toastCtrl.create({
      message: 'Cannot Find SmartHAC Device',
      position: 'middle',
      duration: 20000
    });
    toast.present();
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }

  deviceSelected(id, device) {
    console.log(JSON.stringify(device) + ' selected');
    this.bleService.setDevice(device);
    this.router.navigateByUrl('/device-details' + id);
  }

  async showToast(msj) {
    const toast = await this.toastCtrl.create({
      message: msj,
      duration: 1000
    });
    await toast.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '',
      message: '',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    //for (let i = 0; i < this.devices.length; i ++) {
    /*for (const device of this.devices) {
      alert.message.concat('\n' + (device.name || 'Unnamed') );
    }
    */
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}
