import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PowerConsumptionAnalysisPage } from './power-consumption-analysis.page';

const routes: Routes = [
  {
    path: '',
    component: PowerConsumptionAnalysisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PowerConsumptionAnalysisPage]
})
export class PowerConsumptionAnalysisPageModule {}
