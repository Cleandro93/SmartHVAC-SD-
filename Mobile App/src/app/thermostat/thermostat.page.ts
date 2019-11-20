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
  on = 1;
  off = 0;
  category: string;
  ambTemp: number;
  setToTemp;
  weeklyTemp: number;
  tempUnit: string;
  devices: any;
  device: any;
  statusMessage: string;
  sensorData: Uint8Array;
  data: number[] = [0, 0, 0, 0, 0, 1, 0];
  prevData: number[] = [0, 0, 0, 0, 0, 0, 0];
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
      const receivedObject = JSON.parse(val);
      this.device = receivedObject;
      console.log('Received this Object: ' + this.device);
      console.log('Type of OBJ is ' + typeof(this.device));
      console.log('Device name passed is: ' + this.device.name);
      this.onRead(this.device);
      console.log('Ambtemp is: ' + this.ambTemp);
      this.setToTemp = this.ambTemp;
    });

    this.storage.get('ambTemp').then((val) => {
      this.ambTemp = val;
      this.setToTemp = val;
      this.data[4] = val;
      console.log('Value is: ' + val);
    });

    this.data[6] = 0;

    console.log('Initial Data is: ' + this.data);
    this.wait(200);
  }

  ionViewWillLeave() {
  }

  onRead(device) {
    // Update the UI with the current state of the switch characteristic
    this.ble.read(device.id, 'D0AF', '7B53').then(
      buffer => {
        const data = new Uint8Array(buffer) as Uint8Array;
        const lastToCopy = data.length - 1;
        this.ngZone.run(() => {
            this.ambTemp = data[4];
            console.log('switch characteristic ' + data[4]);
            console.log('Got ' + data);
            console.log('Set AmbTemp to: ' + this.ambTemp);
        });
      }
    );
  }

  onWrite() {
    console.log('onRead');
    const buffer = new Uint8Array(this.data).buffer as ArrayBuffer;
    console.log('Data is: ' + this.data[0]);
    console.log('Type is: ' + typeof(buffer));
    console.log('The whole array is: ' + this.data);
    this.ble.write(this.device.id, 'D0AF', '7B53', buffer).then(
      () => this.setStatus('Light is ' + (this.data[0] ? 'on' : 'off')),
      e => this.presentAlert('Unexpected Error', 'Error updating power switch')
    );
  }

  getAmbTempStatus() {
    return this.ambTemp;
  }

  getSetTemp() {
    if (this.category === 'celcius') {
      return (this.setToTemp - 32) * (5 / 9);
    } else {
      return this.setToTemp - 64;
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
    this.onRead(this.device);
  }

  setTempDown() {
    this.setToTemp -= 1;
    this.data[3] = this.setToTemp;
    this.onWrite();
    this.onRead(this.device);
  }

  powerOff() {
  }

  wait(ms) {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
   }
  }

 fanSelectionChanged(event) {
   this.fanSelection = event.detail.value;
   const last = this.data.length - 1;
   console.log('Event is: ' + event + '\n');
   console.log('Value is: ' + this.fanSelection);

   switch (this.fanSelection) {
    case 'coolOn':
        this.data[0] = this.on;
        console.log('Cool On data is: ' + this.data[0]);
        break;
    case 'coolOff':
        this.data[0] = this.off;
        break;
    case 'fanHigh':
        this.data[1] = this.off;
        this.data[2] = this.on;
        break;
    case 'fanLow':
        this.data[2] = this.off;
        this.data[1] = this.on;
        break;
    case 'powerOn':
        this.data[5] = this.on;
        break;
    case 'powerOff':
        // this.prevData = this.data.slice(0, last);
        this.data[5] = this.off;
        break;
    default:
      console.log('Error with the radio buttons\n');
   }

   this.onWrite();
   this.onRead(this.device);
  }
}
