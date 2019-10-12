import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeviceInformationPage } from './device-information.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceInformationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeviceInformationPage]
})
export class DeviceInformationPageModule {}
