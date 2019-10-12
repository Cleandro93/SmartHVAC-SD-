import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BLE } from '@ionic-native/ble/ngx';

//
import { NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-thermostat-analysis',
  templateUrl: './thermostat-analysis.page.html',
  styleUrls: ['./thermostat-analysis.page.scss'],
})
export class ThermostatAnalysisPage implements OnInit {
  category: string;
    ambTemp: number;
    setToTemp = 72;
    weeklyTemp: number;
    tempUnit: string;
    devices: any[];
    statusMessage: string;

    constructor(private navCtrl: NavController,
                private route: ActivatedRoute,
                private router: Router,
                private ngZone: NgZone,
                private toastCtrl: ToastController,
                private ble: BLE,
                public alertController: AlertController
                ) { }

    ngOnInit() {
    }

    segmentChanged(ev: any) {
      this.category = ev.detail.value;
      console.log(ev);
      switch (this.category) {
        case 'connection': {
          this.navCtrl.navigateRoot('/pair');
          break;
        }
        case 'liveData': {
          this.navCtrl.navigateRoot('/ac-analysis');
          break;
        }
        case 'thermostat': {
          this.navCtrl.navigateRoot('/thermostat-analysis');
          break;
        }
        case 'test': {
          this.navCtrl.navigateRoot('/test');
          break;
        }
        default: {
          this.navCtrl.navigateRoot('/thermostat');
          break;
        }
      }
    }

    getAmbTempStatus() {
      //this.ambTemp = this.sensorData[0];
      this.ambTemp = 72;

      if (this.category === 'celcius') {
        return (this.ambTemp - 32) * (5 / 9);
      } else {
        return this.ambTemp;
      }
    }

    getSetTemp() {
      if (this.category === 'celcius') {
        return (this.setToTemp - 32) * (5 / 9);
      } else {
        return this.setToTemp;
      }
    }

    setTempUp() {
      // console.log("Tried to Increase Temp");
      this.setToTemp += 1;
    }

    setTempDown() {
      // console.log("Tried to Increase Temp");
      this.setToTemp -= 1;
    }

    powerOff() {

    }
    /*
    scan(){
      this.setStatus(‘Scanning for BLE devices...‘);
      this.devices = [];

      this.ble.scan([‘ff10’], 5, ).subscribe(
        device => this.onDeviceDiscovered(device)
      );
      setTimeout(this.setStatus.bind(this),500,’Scan complete’);
    }
    */
    //setStatus and onDevicesDiscovered need to be written

    /*
    ngOnInit() {
      //if (this.route.snapshot.data['special']){
        let passDevice = this.route.snapshot.data['special'];
  
        this.setStatus('Connecting to ' + passDevice.name || passDevice.id);
  
        this.ble.connect(passDevice.id).subscribe(
          device => this.onConnected(passDevice),
          device => this.onDeviceDisconnected(passDevice)
        );
  
      //}
    }
  
    onConnected(device){
      //this.ngZone.run(() => {
      this.device = device;
      this.setStatus('Connected to ' + (device.name || device.id));
  
      this.ble.startNotification(this.device.id, "D0AF", "6B7B").subscribe(
          data => this.onSensorsData(data),
          error => this.presentAlert('Unexpected Error', error)
      )
      //})
    }
  
    
  onSensorsData(buffer:ArrayBuffer){
    var data = new Uint8Array(buffer);
    console.log("***  DATA NOTIFICATION  *** ", data);
    this.ngZone.run(() =>{
      this.sensorData = data;
    });
  }
   onDeviceDisconnected(device){
      let toast = this.toastCtrl.create({
        message: 'The device unexpectedly disconnected.',
        duration: 3000,
        position: 'middle'
      });
    }
  
    async presentAlert(header, message) {
      const alert = await this.alertController.create({
        header: header,
        subHeader: 'Subtitle',
        message: message,
        buttons: ['OK']
      });
  
      await alert.present();
    }
  
  
    setStatus(message){
      console.log(message);
      this.ngZone.run(() => {
        this.statusMessage = message;
      });
    }
  
    ionViewWillLeave(){
      this.ble.disconnect(this.device.id).then(
        ()=>console.log('Disconnected'+JSON.stringify(this.device)),
        ()=>console.log('ERROR disconnecting '+JSON.stringify(this.device))
      )
    }
    */
}
