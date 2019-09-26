import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-device-information',
  templateUrl: './device-information.page.html',
  styleUrls: ['./device-information.page.scss'],
})
export class DeviceInformationPage implements OnInit {

  firstName: string = '';
  name: string = '';
  nameUpdate: string = '';

  constructor(private navCtrl: NavController, public alertController: AlertController) { }

  ngOnInit() {

  }

  saveButton() {
    this.nameUpdate = this.name;
    console.log(this.firstName);
    //console.log(this.name);
  }

  dismissButton() {
    this.navCtrl.navigateRoot('/main');
  }

  handleFirstNameValue(event) {
    this.firstName = event.target.value;
  }

  handleLastNameValue(event) {

  }

}
