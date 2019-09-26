import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TemperatureAnalysisPage } from './temperature-analysis.page';

const routes: Routes = [
  {
    path: '',
    component: TemperatureAnalysisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TemperatureAnalysisPage]
})
export class TemperatureAnalysisPageModule {}
