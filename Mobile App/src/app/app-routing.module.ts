import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BleResolverService } from './main/resolver/ble-resolver.service';

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
  // tslint:disable-next-line: max-line-length
  { path: 'temperature-analysis', loadChildren: './main/ac-analysis/temperature-analysis/temperature-analysis.module#TemperatureAnalysisPageModule' },
  { path: 'humidity-analysis', loadChildren: './main/ac-analysis/humidity-analysis/humidity-analysis.module#HumidityAnalysisPageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'power-consumption-analysis', loadChildren: './main/ac-analysis/power-consumption-analysis/power-consumption-analysis.module#PowerConsumptionAnalysisPageModule' },
  { path: 'current-analysis', loadChildren: './main/ac-analysis/current-analysis/current-analysis.module#CurrentAnalysisPageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'vibration-analysis', loadChildren: './main/ac-analysis/vibration-analysis/vibration-analysis.module#VibrationAnalysisPageModule' },
  { path: 'bluetooth', loadChildren: './main/bluetooth/bluetooth.module#BluetoothPageModule' },
  { path: 'device-details', loadChildren: './main/device-details/device-details.module#DeviceDetailsPageModule' },
  {
    path: 'device-details/:id',
    resolve: {
      special: BleResolverService
    },
    loadChildren: './main/device-details/device-details.module#DeviceDetailsPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
