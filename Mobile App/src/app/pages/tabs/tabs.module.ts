import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'live-data',
        pathMatch: 'full'
      },
      {
        path: 'live-data',
        loadChildren: '../data-display/live-data/live-data.module#LiveDataPageModule'
      },
      {
        path: 'temperature-analysis',
        loadChildren: '../data-display/temperature-analysis/temperature-analysis.module#TemperatureAnalysisPageModule'
      },
      {
        path: 'humidity-analysis',
        loadChildren: '../data-display/humidity-analysis/humidity-analysis.module#HumidityAnalysisPageModule'
      },
      {
        path: 'power-analysis',
        loadChildren: '../data-display/power-analysis/power-analysis.module#PowerAnalysisPageModule'
      },
      {
        path: 'vibration-analysis',
        loadChildren: '../data-display/vibration-analysis/vibration-analysis.module#VibrationAnalysisPageModule'
      },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
