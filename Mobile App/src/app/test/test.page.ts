import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BLE } from '@ionic-native/ble/ngx';
import { Storage } from '@ionic/storage';
import { ToastController, AlertController } from '@ionic/angular';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  selectedPath = '';
  category: string;
  device: any;
  statusMessage: string;
  sensorData: Uint8Array;
  initData: number[] = [0, 0, 0, 0, 0, 0, 0];
  data: number[] = [0, 0, 0, 0, 0, 0, 0];
  on = 1;
  off = 0;
  rToogle = true;
  yToogle = true;
  ghToogle = true;
  glToogle = true;

  constructor(private navCtrl: NavController,
              private router: Router,
              private ble: BLE,
              public storage: Storage,
              public alertController: AlertController,
              private ngZone: NgZone) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
    this.storage.get('bleDevice').then((val) => {
      console.log('Your age is', val);
      const receivedObject = JSON.parse(val);
      this.device = receivedObject;
      console.log('Received this Object: ' + this.device);
      console.log('Type of OBJ is ' + typeof(this.device));
      console.log('Device name passed is: ' + this.device.name);
      this.onInitRead(this.device);
    });

    this.signalLineChanged(this.data);
  }

  getCurrACStatus(data) {
    this.yToogle = (data[0] === this.on) ? true : false;
    this.glToogle = (data[1] === this.on) ? true : false;
    this.ghToogle = (data[2] === this.on) ? true : false;
    this.rToogle = (data[5] === this.on) ? true : false;
  }

  onInitRead(device) {
    // Update the UI with the current state of the switch characteristic
    this.ble.read(device.id, 'D0AF', '7B53').then(
      buffer => {
        const data = new Uint8Array(buffer);
        const len = data.length;
        this.ngZone.run(() => {
            for (let index = 0; index < len; index++) {
              this.data[index] = data[index];
              this.initData[index] = data[index];
            }
            this.signalLineChanged(data);
        });
      }
    );
  }

  onRead(device) {
    // Update the UI with the current state of the switch characteristic
    this.ble.read(device.id, 'D0AF', '7B53').then(
      buffer => {
        const data = new Uint8Array(buffer);
        const len = data.length;
        this.ngZone.run(() => {
            /* for (let index = 0; index < len; index++) {
              console.log('Did index: ' + index);
              this.getThermStatus(index, data[index]);
            } */
            console.log('Just Read: ' + data);
            this.signalLineChanged(data);
            this.getCurrACStatus(data);
        });
      }
    );
  }

  onWrite(data) {
    console.log('onRead');
    const buffer = new Uint8Array(data).buffer as ArrayBuffer;
    console.log('Data is: ' + data[0]);
    console.log('Type is: ' + typeof(buffer));
    console.log('The whole array is: ' + this.data);
    this.ble.write(this.device.id, 'D0AF', '7B53', buffer).then(
      () => this.setStatus('Light is ' + (data[0] ? 'on' : 'off')),
      e => this.presentAlert('Unexpected Error', 'Error updating power switch')
    );
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

  signalLineChanged(data) {
    this.getCurrACStatus(data);
    console.log('Data is sent now: ' + this.data);
    const len = data.length;
    console.log('value is: ');
    for (let index = 0; index < len; index++) {
      this.getThermStatus(index, data[index]);
    }
  }

  getThermStatus(index: number, value: number) {
    switch (index) {
      case 5:
        this.changeColor('rValue', 'rP', value);
        break;
      case 0:
        this.changeColor('yValue', 'yP', value);
        break;
      case 1:
        this.changeColor('ghValue', 'ghP', value);
        break;
      case 2:
        this.changeColor('glValue', 'glP', value);
        break;
      default:
        console.log('Error parsing the control lines status\n');
    }
  }
  changeColor(className: string, pClassName: string, value: number) {
    const div = document.getElementsByClassName(className)[0];
    const p = div.getElementsByClassName(pClassName)[0];

    if (value === this.on) {
      // tslint:disable-next-line: max-line-length
      const onAttributes = 'position: relative; width: 40px; height: 33px; border: 5px solid #06367e; font-size: 20px; text-align:center; display: inline-block; background-color: #c0e3f7;';
      // tslint:disable-next-line: max-line-length
      const onPAttributes = 'margin: 0; position: absolute; top: 50%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%); color: #06367e;';
      div.setAttribute('style', onAttributes);
      p.setAttribute('style', onPAttributes);
      console.log('Changed on');
    } else if (value === this.off) {
      // tslint:disable-next-line: max-line-length
      const offAttributes = 'position: relative; width: 40px; height: 33px; border: 5px solid #7e0606; font-size: 20px; text-align:center; display: inline-block; background-color: #c76767;';
      // tslint:disable-next-line: max-line-length
      const onPAttributes = 'margin: 0; position: absolute; top: 50%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%); color: #550303;';
      p.setAttribute('style', onPAttributes);
      div.setAttribute('style', offAttributes);
    }
  }

  rSignalLineChanged() {
    console.log('Changed rToggle');
    console.log('The value of rToggle is: ' + this.rToogle);
    if (this.rToogle) {
      console.log('It is True');
      this.data[5] = this.on;
    } else {
      console.log('It is False');
      this.data[5] = this.off;
      // this.signalLineChanged([0, 0, 0, 0, 0, 0, 0]);
    }
    console.log('Data is now: ' + this.data);
    // this.wait(2000);
    this.onWrite(this.data);
    this.onRead(this.device);
  }

  ySignalLineChanged() {
    console.log('Changed yToggle');
    console.log('The value of yToggle is: ' + this.yToogle);
    if (this.yToogle) {
      console.log('It is True');
      this.data[0] = this.on;
    } else {
      console.log('It is False');
      this.data[0] = this.off;
    }
    console.log('Data is now: ' + this.data);
    this.onWrite(this.data);
    this.onRead(this.device);
  }

  ghSignalLineChanged() {
    console.log('Changed ghToggle');
    console.log('The value of ghToggle is: ' + this.ghToogle);
    if (this.ghToogle) {
      console.log('It is True');
      this.data[1] = this.off;
      this.data[2] = this.on;
    } else {
      this.data[2] = this.off;
      this.data[1] = this.on;
    }
    console.log('Data is now: ' + this.data);
    this.onWrite(this.data);
    this.onRead(this.device);
  }

  glSignalLineChanged() {
    console.log('Changed glToggle');
    console.log('The value of glToggle is: ' + this.glToogle);
    if (this.glToogle) {
      console.log('It is True');
      this.data[2] = this.off;
      this.data[1] = this.on;
    } else {
      console.log('It is False');
      this.data[1] = this.off;
      this.data[2] = this.on;
    }
    console.log('Data is now: ' + this.data);
    this.onWrite(this.data);
    this.onRead(this.device);
  }

  wait(ms) {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
   }
 }

 ionViewWillLeave() {
  this.onWrite(this.initData);
 }



}
