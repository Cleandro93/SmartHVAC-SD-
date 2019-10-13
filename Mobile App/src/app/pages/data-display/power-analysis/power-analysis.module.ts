import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PowerAnalysisPage } from './power-analysis.page';

const routes: Routes = [
  {
    path: '',
    component: PowerAnalysisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PowerAnalysisPage]
})
export class PowerAnalysisPageModule {}
