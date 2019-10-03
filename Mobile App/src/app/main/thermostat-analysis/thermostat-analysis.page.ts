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
    recentTemp: number;
    dailyTemp: number;
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

    getTempRecentStatus() {
      this.recentTemp = 32;

      if (this.category === 'celcius') {
        return this.recentTemp;
      } else {
        return (this.recentTemp * 1.8) + 32;
      }
    }

    goToCompressorControl() {
      this.navCtrl.navigateRoot('/welcome/main/diagnosis-options/compressor');
    }

    goToFanControl() {
      this.navCtrl.navigateRoot('/welcome/main/diagnosis-options/fan-control');
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
