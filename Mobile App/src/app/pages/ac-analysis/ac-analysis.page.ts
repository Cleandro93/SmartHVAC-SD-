import { Component, OnInit, NgZone  } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NavController } from '@ionic/angular';

import { ToastController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { BLE } from '@ionic-native/ble/ngx';
import { BleService } from '../services/ble.service';

@Component({
  selector: 'app-ac-analysis',
  templateUrl: './ac-analysis.page.html',
  styleUrls: ['./ac-analysis.page.scss'],
})
export class AcAnalysisPage implements OnInit {
  selectedPath = '';

  category: string;

  recentTemp: number;
  dailyTemp: number;
  weeklyTemp: number;
  tempUnit: string;

  recentHum: number;
  dailyHum: number;
  weeklyHum: number;
  humUnit: string;

  recentPow: number;
  dailyPow: number;
  weeklyPow: number;
  powUnit: string;

  recentCur: number;
  dailyCur: number;
  weeklyCur: number;
  curUnit: string;

  recentVol: number;
  dailyVol: number;
  weeklyVol: number;
  volUnit: string;

  //
  devices: any[] = [];
  statusMessage: string;
  adv: Uint8Array;


  constructor(private navCtrl: NavController,
              private router: Router,
              //
              private toastCtrl: ToastController,
              private ble: BLE,
              private ngZone: NgZone,
              private bleService: BleService,
              public alertController: AlertController) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

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
        this.navCtrl.navigateRoot('/thermostat');
        break;
      }
      case 'test': {
        this.navCtrl.navigateRoot('/test');
        break;
      }
      default: {
        this.navCtrl.navigateRoot('/thermostat-analysis');
        break;
      }
    }
  }

  getTempRecentStatus() {
    this.ngZone.run ( () => {
      console.log(this.adv);
      // this.recentTemp = this.adv[4];
      this.recentTemp = 0;
    });

    if (this.category === 'celcius') {
      return this.recentTemp;
    } else {
      return (this.recentTemp * 1.8) + 32;
    }
  }

  getTempDailyStatus() {
    this.dailyTemp = 24;

    if (this.category === 'celcius') {
      return this.dailyTemp;
    } else {
      return (this.dailyTemp * 1.8) + 32;
    }
  }

  getTempWeeklyStatus() {
    this.weeklyTemp = 27;

    if (this.category === 'celcius') {
      return this.weeklyTemp;
    } else {
      return (this.weeklyTemp * 1.8) + 32;
    }
  }

  getHumRecentStatus() {
    this.recentHum = 70;

    if (this.category === 'other') {
      return this.recentHum;
    } else {
      return (this.recentHum) + 12;
    }
  }

  getHumDailyStatus() {
    this.dailyHum = 85;

    if (this.category === 'other') {
      return this.dailyHum + 13;
    } else {
      return this.dailyHum;
    }
  }

  getHumWeeklyStatus() {
    this.weeklyHum = 79;
    return this.weeklyHum;
  }

  getPowRecentStatus() {
    this.recentPow = 70;

    if (this.category === 'kwh') {
      return this.recentPow;
    } else {
      return (this.recentPow) + 12;
    }
  }

  getPowDailyStatus() {
    this.dailyPow = 85;

    if (this.category === 'kwh') {
      return this.dailyPow + 13;
    } else {
      return this.dailyPow;
    }
  }

  getPowWeeklyStatus() {
    this.weeklyPow = 73;
    return this.weeklyPow;
  }

  getCurRecentStatus() {
    this.recentCur = 3;

    if (this.category === 'A') {
      return this.recentCur;
    } else {
      return (this.recentCur) / 1000;
    }
  }

  getCurDailyStatus() {
    this.dailyCur = 2.5;

    if (this.category === 'A') {
      return this.dailyCur;
    } else {
      return this.dailyCur / 1000;
    }
  }

  getCurWeeklyStatus() {
    this.weeklyCur = 2;

    if (this.category === 'A') {
      return this.weeklyCur;
    } else {
      return this.weeklyCur / 1000;
    }
  }

  getVolRecentStatus() {
    this.recentVol = 15;

    if (this.category === 'V') {
      return this.recentVol;
    } else {
      return (this.recentVol) / 1000;
    }
  }

  getVolDailyStatus() {
    this.dailyVol = 11;

    if (this.category === 'V') {
      return this.dailyVol;
    } else {
      return this.dailyVol / 1000;
    }
  }

  getVolWeeklyStatus() {
    this.weeklyVol = 9.6;

    if (this.category === 'V') {
      return this.weeklyVol;
    } else {
      return this.weeklyVol / 1000;
    }
  }

  goToTemperatureAnalysis() {
    console.log("Pressed voltage");
    this.navCtrl.navigateRoot('/ac-analysis');
  }
  goToHumidityAnalysis() {
    console.log("Pressed voltage");
    this.navCtrl.navigateRoot('/humidity-analysis');
  }
  goToVibrationAnalysis() {
    console.log("Pressed voltage");
    this.navCtrl.navigateRoot('/vibration-analysis');
  }
  goToPowerConAnalysis() {
    console.log("Pressed voltage");
    this.navCtrl.navigateRoot('/power-consumption-analysis');
  }
  goToCurrentAnalysis() {
    console.log("Pressed voltage");
    this.navCtrl.navigateRoot('/current-analysis');
  }
  goToVoltageAnalysis() {
    console.log("Pressed voltage");
    this.navCtrl.navigateRoot('/voltage-analysis');
  }

  // To Erase Later
  scan() {
    this.setStatus('Scanning for  SmartHVAC Devices');
    this.devices = [];  // clear list

    this.ble.scan(['D0AF'], 1000000000000).subscribe(
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
    this.router.navigateByUrl('/device-details/'+id);
  }

  async showToast(msj) {
    const toast = await this.toastCtrl.create({
      message: msj,
      duration: 1000
    });
    await toast.present();
  }

}
