import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vibration-analysis',
  templateUrl: './vibration-analysis.page.html',
  styleUrls: ['./vibration-analysis.page.scss'],
})
export class VibrationAnalysisPage implements OnInit {


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

    segmentChanged(ev: any) {
      this.category = ev.detail.value;
      console.log(ev);
    }

    getTempRecentStatus() {
      this.recentTemp = 32;

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

}
