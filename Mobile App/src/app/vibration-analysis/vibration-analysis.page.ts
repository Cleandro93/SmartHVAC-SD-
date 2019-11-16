import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BLE } from '@ionic-native/ble/ngx';
import { AlertController } from '@ionic/angular';
import * as p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import * as fftjs from 'fft-js';

@Component({
  selector: 'app-vibration-analysis',
  templateUrl: './vibration-analysis.page.html',
  styleUrls: ['./vibration-analysis.page.scss'],
})
export class VibrationAnalysisPage implements OnInit {
  receivedObject: any;
  sensorData: Uint8Array;
  xAxis: number;
  yAxis: number;
  zAxis: number;

  signal = [1, 0, 1, 0, 1, 0, 1, 0];
  myFFT = fftjs.fft;
  myUtil = fftjs.util;
  phasors: any;
  frequencies: any;
  magnitudes: any;
  both: any;

  fft: any;
  public p5song: p5.SoundFile;
  public p5Sketch: p5;
  public page = 0;
  public canvas: p5.Element;
  w: any;

  constructor(public storage: Storage,
              private ble: BLE,
              private ngZone: NgZone,
              public alertController: AlertController) {
    /*
                this.phasors = this.myFFT(this.signal);
    this.frequencies = fftjs.util.fftFreq(this.phasors, 8000);
    console.log('freq: ', this.frequencies);
    this.magnitudes = fftjs.util.fftMag(this.phasors);
    console.log('mag: ', this.magnitudes);


    console.log('phasors: ', this.phasors);
    console.log('bith: ', this.both);
    */
  }

  ngOnInit() {
    // this.createCanvas();


    this.storage.get('bleDevice').then((val) => {
      console.log('Your age is', val);
      this.receivedObject = JSON.parse(val);
      console.log('Received this Object: ' + this.receivedObject);
      console.log('Type of OBJ is ' + typeof(this.receivedObject));
      console.log('Device name passed is: ' + this.receivedObject.name);

      this.ble.startNotification(this.receivedObject.id, 'D0AF', '6B7B').subscribe(
        data => {this.onSensorsData(data); },
        error => {this.presentAlert('Unexpected Error', error); }
      );
    });
  }

  /*
  public createCanvas() {
    this.sketch((this.p5Sketch = new p5(this.sketch)));
  }

  public sketch(p: p5, page?: number) {
    p.preload = () => {
      let song;
      this.p5song = song = new p5.SoundFile('./assets/bensound-cute.mp3',
      playSong, error, loading);
      function playSong() {
        song.setLoop(true);
        song.play();
      }
    
      function error() {
        console.log("error while loading song");
      }
    
      function loading(load: number) {
        console.log('load: ',load);
      }
    };

    p.setup = () => {
      this.canvas = p.createCanvas(256, 256).parent('canvas');
      p.angleMode(p.DEGREES);
      p.colorMode(p.HSB);
      this.fft = new p5.FFT(0.5, 64);
      this.w = (p.width / 64) - 2;
      //this.playMusic();
      console.log('p5 fft: ', this.fft);
     };

    p.draw = () => {
      p.background(0);
      let spectrum = this.fft.analyze();
      console.log('spectrum: ', spectrum);
      p.noStroke();
      p.stroke(0,255,0);
      p.translate(256 * 0.02, 256 * 0.25);
      
      p.strokeWeight(2);
      console.log('len',spectrum.length);
      let len = spectrum.length;
      for(var i=0; i<len; i++){
        console.log('inside the loop: ', this.w);
        var temp = spectrum[i];
        //var y = p.map(temp, 0, 256, p.height, 0);
        p.fill( i,255, 255);
        let x = p.map(i, 0, spectrum.length, 0, p.width);
        let h = -p.height + p.map(spectrum[i], 0, 256, p.height, 0);
         p.rect(x, p.height, p.width / spectrum.length,  h );
        //p.rect(i*this.w, y, this.w, p.height - y);
      
      }
      p.endShape();
      //p.stroke(255);
      //p.noFill();
      

    };

  }
  */

  onSensorsData(buffer: ArrayBuffer) {
    const data = new Uint8Array(buffer);
    // console.log('*** DATA NOTIFICATION *** ', data);
    this.ngZone.run(() => {
      this.sensorData = data;

      this.xAxis = this.sensorData[14];
      this.yAxis = this.sensorData[15];
      this.zAxis = this.sensorData[16];

      console.log('Reading: ' + this.sensorData);
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

  ionViewWillLeave() {
    console.log('********** Letf the Page ************');
    this.ble.stopNotification(this.receivedObject.id, 'D0AF', '6B7B');
   }

   playMusic(){
    if(this.p5song.isPlaying() || this.p5song.isPaused()){
      this.p5song.stop();
    }
    else{
      this.p5song.play();
    }
  }

  ngOnDestroy() {
    this.p5Sketch.remove();
    }
}
