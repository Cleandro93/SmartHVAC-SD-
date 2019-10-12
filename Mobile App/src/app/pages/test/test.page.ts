import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  selectedPath = '';
  category: string;

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
        this.navCtrl.navigateRoot('/test');
        break;
      }
    }
  }

}
