import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BLE } from '@ionic-native/ble/ngx';

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

    constructor(private navCtrl: NavController, private ble: BLE) { }

    ngOnInit() {
    }

    segmentChanged(ev: any) {
      this.category = ev.detail.value;
      //console.log(ev);
    }

    getAmbTempStatus() {
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
}
