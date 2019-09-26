import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnalysisHistoryPage } from './analysis-history.page';

const routes: Routes = [
  {
    path: '',
    component: AnalysisHistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnalysisHistoryPage]
})
export class AnalysisHistoryPageModule {}
