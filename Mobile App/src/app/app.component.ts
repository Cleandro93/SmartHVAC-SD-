import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Connect SmartHVAC',
      url: '/bluetooth',
      icon: 'bluetooth'
    },
    {
      title: 'Live Data',
      url: '/device-details/:id',
      icon: 'analytics'
    },
    {
      title: 'Thermostat',
      url: '/thermostat',
      icon: 'phone-landscape'
    },
    {
      title: 'Test',
      url: '/test',
      icon: 'options'
    },
    {
      title: 'SmartHVAC Proprieties',
      url: '/device-information',
      icon: 'settings'
    },
    {
      title: 'Help',
      url: '/help',
      icon: 'help-circle'
    },
    {
      title: 'Vibration',
      url: '/vibration-analysis',
      icon: 'pulse'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
