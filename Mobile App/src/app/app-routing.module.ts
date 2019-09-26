import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'pair', loadChildren: './main/pair/pair.module#PairPageModule' },
  { path: 'ac-analysis', loadChildren: './main/ac-analysis/ac-analysis.module#AcAnalysisPageModule' },
  { path: 'device-information', loadChildren: './main/device-information/device-information.module#DeviceInformationPageModule' },
  { path: 'thermostat-analysis', loadChildren: './main/thermostat-analysis/thermostat-analysis.module#ThermostatAnalysisPageModule' },
  { path: 'help', loadChildren: './main/help/help.module#HelpPageModule' },
  { path: 'analysis-history', loadChildren: './main/analysis-history/analysis-history.module#AnalysisHistoryPageModule' },
  { path: 'voltage-analysis', loadChildren: './main/ac-analysis/voltage-analysis/voltage-analysis.module#VoltageAnalysisPageModule' },
  { path: 'temperature-analysis', loadChildren: './main/ac-analysis/temperature-analysis/temperature-analysis.module#TemperatureAnalysisPageModule' },
  { path: 'humidity-analysis', loadChildren: './main/ac-analysis/humidity-analysis/humidity-analysis.module#HumidityAnalysisPageModule' },
  { path: 'power-consumption-analysis', loadChildren: './main/ac-analysis/power-consumption-analysis/power-consumption-analysis.module#PowerConsumptionAnalysisPageModule' },
  { path: 'current-analysis', loadChildren: './main/ac-analysis/current-analysis/current-analysis.module#CurrentAnalysisPageModule' },
  { path: 'vibration-analysis', loadChildren: './main/ac-analysis/vibration-analysis/vibration-analysis.module#VibrationAnalysisPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
