import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BLE } from '@ionic-native/ble/ngx';

import { NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-thermostat',
  templateUrl: './thermostat.page.html',
  styleUrls: ['./thermostat.page.scss'],
})
export class ThermostatPage implements OnInit {
  on = 0;
  off = 1;
  category: string;
  ambTemp: number;
  setToTemp = 70;
  weeklyTemp: number;
  tempUnit: string;
  devices: any;
  device: any;
  statusMessage: string;
  sensorData: Uint8Array;
  data: number[] = [3, 3, 3, 3, 3];
  prevData: number[];
  zAxis: number;
  fanSelection: string;

  constructor(private navCtrl: NavController,
              private route: ActivatedRoute,
              private router: Router,
              private ngZone: NgZone,
              private toastCtrl: ToastController,
              private ble: BLE,
              public alertController: AlertController,
              public storage: Storage
              ) {
  }

  ngOnInit() {
    // Or to get a key/value pair
    this.storage.get('bleDevice').then((val) => {
      console.log('Your age is', val);
      let receivedObject = JSON.parse(val);
      this.device = receivedObject;
      console.log('Received this Object: ' + this.device);
      console.log('Type of OBJ is ' + typeof(this.device));
      console.log('Device name passed is: ' + this.device.name);
      this.onRead(this.device);
      console.log('Ambtemp is: ' + this.ambTemp);
      this.setToTemp = this.ambTemp;
    });
  }

  ionViewWillLeave() {
  }

  onRead(device) {
    // Update the UI with the current state of the switch characteristic
    this.ble.read(device.id, 'D0AF', '7B53').then(
      buffer => {
        let data = new Uint8Array(buffer);
        
        this.ngZone.run(() => {
            this.ambTemp = data[4];
            console.log('switch characteristic ' + data[4]);
            console.log('Set AmbTemp to: ' + this.ambTemp);
        });
      }
    );
  }

  onWrite() {
    console.log('onRead');
    let buffer = new Uint8Array(this.data).buffer as ArrayBuffer;
    console.log('Data is: ' + this.data[0]);
    console.log('Type is: ' + typeof(buffer));
    console.log('The whole array is: ' + this.data);
    this.ble.write(this.device.id, 'D0AF', '7B53', buffer).then(
      () => this.setStatus('Light is ' + (this.data[0] ? 'on' : 'off')),
      e => this.presentAlert('Unexpected Error', 'Error updating power switch')
    );
  }

  getAmbTempStatus() {
    // this.ambTemp = 72;
    // this.onRead(this.device);
    return this.ambTemp;
  }

  getSetTemp() {
    if (this.category === 'celcius') {
      return (this.setToTemp - 32) * (5 / 9);
    } else {
      return this.setToTemp;
    }
  }

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      subHeader: 'Subtitle',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }

  setTempUp() {
    this.setToTemp += 1;
    this.data[3] = this.setToTemp;
    this.onWrite();
  }

  setTempDown() {
    this.setToTemp -= 1;
    this.data[3] = this.setToTemp;
    this.onWrite();
  }

  powerOff() {
  }

  wait(ms) {
    let start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
   }
  }

 fanSelectionChanged(event) {
   this.fanSelection = event.detail.value;
   console.log('Event is: ' + event + '\n');
   console.log('Value is: ' + this.fanSelection);
   let lastToCopy = this.data.length - 1;

   switch (this.fanSelection) {
    case 'coolOn':
        this.data[0] = this.on;
        this.prevData = this.data.slice(0, lastToCopy);
        console.log('Cool On data is: ' + this.data[0]);
        console.log('Cool On prevdata is: ' + this.prevData[0]);
        console.log('Previous is: ' + this.prevData);
        break;
    case 'coolOff':
        this.data[0] = this.off;
        this.prevData = this.data.slice(0, lastToCopy);
        console.log('Previous is: ' + this.prevData);
        // console.log('Cool Off data is: ' + this.data[0]);
        break;
    case 'fanHigh':
        // console.log('Fan High data is: ' + this.data[0]);
        this.data[1] = this.off;
        this.data[2] = this.on;
        this.prevData = this.data.slice(0, lastToCopy);
        console.log('Previous is: ' + this.prevData);
        break;
    case 'fanLow':
        // console.log('Fan Low data is: ' + this.data[0]);
        this.data[2] = this.off;
        this.data[1] = this.on;
        this.prevData = this.data.slice(0, lastToCopy);
        console.log('Previous is: ' + this.prevData);
        break;
    case 'powerOn':
        // console.log('Power On data is: ' + this.data[0]);
        this.data = this.prevData.slice(0, lastToCopy);
        console.log('Previous is: ' + this.prevData);
        break;
    case 'powerOff':
        console.log('Power Off data is: ' + this.data[0]);
        this.data[0] = this.off;
        this.data[1] = this.off;
        this.data[2] = this.off;
        console.log('Previous is: ' + this.prevData);
        break;
    default:
      console.log('Error with the radio buttons\n');
   }

   this.onWrite();
  }
}
