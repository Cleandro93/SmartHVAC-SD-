import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-current-analysis',
  templateUrl: './current-analysis.page.html',
  styleUrls: ['./current-analysis.page.scss'],
})
export class CurrentAnalysisPage implements OnInit {

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

  constructor(private navCtrl: NavController, private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

  precisionRoundMod(number, precision) {
    var factor = Math.pow(10, precision);
    var n = precision < 0 ? number : 0.01 / factor + number;
    return Math.round( n * factor) / factor;
  }

  segmentChanged(ev: any) {
    this.category = ev.detail.value;
    console.log(ev);
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
    var converter;
    this.dailyCur = 2.56;

    if (this.category === 'A') {
      return this.precisionRoundMod(this.dailyCur,3);
    } else {
      converter = this.dailyCur / 1000;
      return this.precisionRoundMod(converter, 3);
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

}
