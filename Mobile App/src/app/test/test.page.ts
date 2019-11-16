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
  data: number[] = [0, 1, 1, 1, 0, 0];
  prevData: number[];
  on = 0;
  off = 1;
  rToogle = true;

  // Test data
  testData: number[] = [1, 0, 1, 1, 0, 0, 0, 1];

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
    /*
    this.storage.get('bleDevice').then((val) => {
      console.log('Your age is', val);
      let receivedObject = JSON.parse(val);
      this.device = receivedObject;
      console.log('Received this Object: ' + this.device);
      console.log('Type of OBJ is ' + typeof(this.device));
      console.log('Device name passed is: ' + this.device.name);
      this.onRead(this.device);
    });
    */

    this.testing(this.data);

    this.rToogle = (this.data[0] === this.on) ? true : false;
  }

  onRead(device) {
    // Update the UI with the current state of the switch characteristic
    this.ble.read(device.id, 'D0AF', '7B53').then(
      buffer => {
        let data = new Uint8Array(buffer);
        let len = data.length;
        this.ngZone.run(() => {
            for (let index = 0; index < len; index++) {
              console.log("Did index: " + index);
              this.getThermStatus(index, data[index]);
            }
        });
      }
    );
  }

  testing(data: number[]) {
    console.log('Data is sent now: ' + this.data);
    const len = data.length;
    console.log('value is: ');
    for (let index = 0; index < len; index++) {
      // this.wait(500);
      // console.log('Index is: ' + index);
      this.getThermStatus(index, data[index]);
    }
  }

  getThermStatus(index: number, value: number) {
    switch (index) {
      case 0:
        this.changeColor('rValue', value);
        break;
      case 1:
        this.changeColor('yValue', value);
        break;
      case 2:
        this.changeColor('ghValue', value);
        break;
      case 3:
        this.changeColor('glValue', value);
        break;
      case 4:
        this.changeColor('wValue', value);
        break;
      case 5:
        this.changeColor('bValue', value);
        break;
      default:
        console.log('value is: ' + value);
        console.log('Error parsing the control lines status\n');
    }
  }
  changeColor(id: string, value: number) {
    console.log('Changed rToggle 1');
    const div = document.getElementById(id);
    console.log('Changed rToggle 1 and id: ' + id);

    if (value === this.on) {
      div.setAttribute('id', 'onDiv');
      console.log('Changed rToggle on');
    } else if (value === this.off) {
      div.setAttribute('id', 'offDiv');
      console.log('Changed rToggle off');
    }
  }

  signalLineChanged() {
    console.log('Changed rToggle');
    console.log('The value of rToggle is: ' + this.rToogle);
    if (this.rToogle) {
      console.log('It is True');
      this.data[0] = this.on;
      this.changeColor('rValue', this.data[0]);
    } else {
      console.log('It is False');
      this.data[0] = this.off;
      this.changeColor('rValue', this.data[0]);
    }
    console.log('Data is now: ' + this.data);

    // this.wait(1500);
    // this.testing(this.data);
    // this.getThermStatus(0, this.data[0]);
  }

  onWrite() {
    console.log('onRead');
    const buffer = new Uint8Array(this.data).buffer as ArrayBuffer;
    console.log('Data is: ' + this.data[0]);
    console.log('Type is: ' + typeof(buffer));
    console.log('The whole array is: ' + this.data);
    this.ble.write(this.device.id, 'D0AF', '7B53', buffer).then(
      // () => this.setStatus('Light is ' + (this.data[0] ? 'on' : 'off')),
      // e => this.presentAlert('Unexpected Error', 'Error updating power switch')
    );
  }

  wait(ms) {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
   }
 }

  /*
  segmentChanged(ev: any) {
    this.category = ev.detail.value;
    console.log(ev);
    switch (this.category) {
      case 'connection': {
        this.navCtrl.navigateRoot('/bluetooth');
        break;
      }
      case 'liveData': {
        this.navCtrl.navigateRoot('/tabs');
        break;
      }
      case 'thermostat': {
        this.navCtrl.navigateRoot('/thermostat');
        break;
      }
      case 'test': {
        this.navCtrl.navigateRoot('/test');
        break;
      }
      default: {
        this.navCtrl.navigateRoot('/test');
        break;
      }
    }
  }
  */

}
