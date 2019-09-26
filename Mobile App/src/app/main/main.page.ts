import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  selectedPath = '';
  constructor(private navCtrl: NavController, private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

  goToAcAnalysis() {
    this.navCtrl.navigateRoot('/ac-analysis');
  }

  goToThermoAnalysis() {
    this.navCtrl.navigateRoot('/thermostat-analysis');
  }

  goToAnalysisHistory() {
    this.navCtrl.navigateRoot('/analysis-history');
  }
}
