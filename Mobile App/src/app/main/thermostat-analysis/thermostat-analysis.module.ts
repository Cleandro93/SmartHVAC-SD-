import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThermostatAnalysisPage } from './thermostat-analysis.page';

const routes: Routes = [
  {
    path: '',
    component: ThermostatAnalysisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThermostatAnalysisPage]
})
export class ThermostatAnalysisPageModule {}
