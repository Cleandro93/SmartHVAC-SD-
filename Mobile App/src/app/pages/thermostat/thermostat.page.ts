import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BLE } from '@ionic-native/ble/ngx';

import { NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-thermostat',
  templateUrl: './thermostat.page.html',
  styleUrls: ['./thermostat.page.scss'],
})
export class ThermostatPage implements OnInit {

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

}
