import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ToastController, AlertController, NavController } from '@ionic/angular';
import { BLE } from '@ionic-native/ble/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.page.html',
  styleUrls: ['./device-details.page.scss'],
})
export class DeviceDetailsPage implements OnInit {

  device: any = {};
  sensorData: Uint8Array;
  statusMessage: string;
  services: any = {};

  category: string;

  ambientTemp: number;
  ambientHum: number;
  compressorTemp: number;
  expansionTemp: number;
  evaporatorTemp: number;

  compressorVolt: number;
  fanLowVolt: number;
  fanHighVolt: number;
  compressorCurr: number;
  fanLowCurr: number;
  fanHighCurr: number;
  compressorFreq: number;
  fanLowFreq: number;
  fanHighFreq: number;

  xAxis: number;
  yAxis: number;
  zAxis: number;

  tempUnit: string;

  constructor(private navCtrl: NavController,
              private route: ActivatedRoute,
              private router: Router,
              private ble: BLE,
              private toastCtrl: ToastController,
              private ngZone: NgZone,
              public alertController: AlertController,
              private storage: Storage
              ) {

    const passDevice = this.route.snapshot.data.special;

    this.setStatus('Connecting to ' + passDevice.name || passDevice.id);

    this.ble.connect(passDevice.id).subscribe(
      device => this.onConnected(passDevice),
      device => this.presentAlert('Disconnected', 'The device unexpectedly disconnected.')
    );
  }

  ngOnInit() {
  }

  onConnected(device) {
    this.device = device;
    this.setStatus('Connected to ' + (device.name || device.id));
    let dataString = JSON.stringify(device);

    console.log('\n\n\n\n\nDataString is: ' + dataString + '\n\n\n\n\n');

    this.storage.set('bleDevice', dataString);
    this.ble.startNotification(this.device.id, 'D0AF', '6B7B').subscribe(
    data => {this.onSensorsData(data); },
    error => {this.presentAlert('Unexpected Error', error); }
    );
  }

  onSensorsData(buffer: ArrayBuffer) {
    const data = new Uint8Array(buffer);
    this.ngZone.run(() => {
      this.sensorData = data;

      this.ambientTemp = this.sensorData[0];
      this.ambientHum = this.sensorData[1];
      this.compressorTemp = this.sensorData[2];
      this.expansionTemp = this.sensorData[3];
      this.evaporatorTemp = this.sensorData[4];

      this.compressorVolt = this.sensorData[5];
      this.fanLowVolt = this.sensorData[6];
      this.fanHighVolt = this.sensorData[7];
      this.compressorCurr = this.sensorData[8];
      this.fanLowCurr = this.sensorData[9];
      this.fanHighCurr = this.sensorData[10];
      this.compressorFreq = this.sensorData[11];
      this.fanLowFreq = this.sensorData[12];
      this.fanHighFreq = this.sensorData[13];

      this.xAxis = this.sensorData[14];
      this.yAxis = this.sensorData[15];
      this.zAxis = this.sensorData[16];

      console.log('Reading: ' + this.sensorData);
    });
  }

  onDeviceDisconnected(device) {
    const toast = this.toastCtrl.create({
      message: 'The device unexpectedly disconnected.',
      duration: 3000,
      position: 'middle'
    });
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

 ionViewWillLeave() {
   console.log("********** Letf the Page ************");
    this.ble.stopNotification(this.device.id, 'D0AF', '6B7B');
  }

  // Presenting the sensing data to the user;
  getCabinTempStatus() {
    return this.ambientTemp;

    /*
    if (this.category === 'celcius') {
      return this.recentTemp;
    } else {
      return (this.recentTemp * 1.8) + 32;
    }
    */
  }

  getCabinHumStatus() {

    return this.ambientHum;
  }

  getCompressorTempStatus() {

    return this.compressorTemp;
  }

  getExpansionTempStatus() {

    return this.expansionTemp;
  }

  getEvaporatorTempStatus() {

    return this.evaporatorTemp;
  }

  getCompressorVoltageStatus() {

    return this.compressorVolt;
  }

  getFanLowVoltageStatus() {

    return this.fanLowVolt;
  }

  getFanHighVoltageStatus() {

    return this.fanHighVolt;
  }

  getCompressorCurrStatus() {

    return this.compressorCurr;
  }

  getFanLowCurrStatus() {

    return this.fanLowCurr;
  }

  getFanHighCurrStatus() {

    return this.fanHighCurr;
  }

  getCompressorFreqStatus() {

    return this.compressorFreq;
  }

  getFanLowFreqStatus() {

    return this.fanLowFreq;
  }

  getFanHighFreqStatus() {

    return this.fanHighFreq;
  }

  getXAxisStatus() {

    return this.xAxis;
  }

  getYAxisStatus() {

    return this.yAxis;
  }

  getZAxisStatus() {

    return this.zAxis;
  }

  goToTemperatureAnalysis() {
    console.log('Pressed voltage');
    this.navCtrl.navigateRoot('/ac-analysis');
  }
  goToHumidityAnalysis() {
    console.log('Pressed voltage');
    this.navCtrl.navigateRoot('/humidity-analysis');
  }
  goToVibrationAnalysis() {
    console.log('Pressed voltage');
    this.navCtrl.navigateRoot('/vibration-analysis');
  }
  goToPowerConAnalysis() {
    console.log('Pressed voltage');
    this.navCtrl.navigateRoot('/power-consumption-analysis');
  }
  goToCurrentAnalysis() {
    console.log('Pressed voltage');
    this.navCtrl.navigateRoot('/current-analysis');
  }
  goToVoltageAnalysis() {
    console.log('Pressed voltage');
    this.navCtrl.navigateRoot('/voltage-analysis');
  }

}
