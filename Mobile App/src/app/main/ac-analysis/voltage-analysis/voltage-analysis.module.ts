import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VoltageAnalysisPage } from './voltage-analysis.page';

const routes: Routes = [
  {
    path: '',
    component: VoltageAnalysisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VoltageAnalysisPage]
})
export class VoltageAnalysisPageModule {}
