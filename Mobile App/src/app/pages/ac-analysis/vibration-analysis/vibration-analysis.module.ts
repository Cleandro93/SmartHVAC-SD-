import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VibrationAnalysisPage } from './vibration-analysis.page';

const routes: Routes = [
  {
    path: '',
    component: VibrationAnalysisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VibrationAnalysisPage]
})
export class VibrationAnalysisPageModule {}
