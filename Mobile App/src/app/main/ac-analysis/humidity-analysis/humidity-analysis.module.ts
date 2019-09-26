import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HumidityAnalysisPage } from './humidity-analysis.page';

const routes: Routes = [
  {
    path: '',
    component: HumidityAnalysisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HumidityAnalysisPage]
})
export class HumidityAnalysisPageModule {}
