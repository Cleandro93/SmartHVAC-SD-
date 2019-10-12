import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BleResolverService } from './pages/resolver/ble-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'pair', pathMatch: 'full' },
  { path: 'pair', loadChildren: './pages/pair/pair.module#PairPageModule' },
  { path: 'ac-analysis', loadChildren: './pages/ac-analysis/ac-analysis.module#AcAnalysisPageModule' },
  { path: 'device-information', loadChildren: './pages/device-information/device-information.module#DeviceInformationPageModule' },
  { path: 'help', loadChildren: './pages/help/help.module#HelpPageModule' },
  { path: 'analysis-history', loadChildren: './pages/analysis-history/analysis-history.module#AnalysisHistoryPageModule' },
  { path: 'voltage-analysis', loadChildren: './pages/ac-analysis/voltage-analysis/voltage-analysis.module#VoltageAnalysisPageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'temperature-analysis', loadChildren: './pages/ac-analysis/temperature-analysis/temperature-analysis.module#TemperatureAnalysisPageModule' },
  { path: 'humidity-analysis', loadChildren: './pages/ac-analysis/humidity-analysis/humidity-analysis.module#HumidityAnalysisPageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'power-consumption-analysis', loadChildren: './pages/ac-analysis/power-consumption-analysis/power-consumption-analysis.module#PowerConsumptionAnalysisPageModule' },
  { path: 'current-analysis', loadChildren: './pages/ac-analysis/current-analysis/current-analysis.module#CurrentAnalysisPageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'vibration-analysis', loadChildren: './pages/ac-analysis/vibration-analysis/vibration-analysis.module#VibrationAnalysisPageModule' },
  { path: 'bluetooth', loadChildren: './pages/bluetooth/bluetooth.module#BluetoothPageModule' },
  { path: 'test', loadChildren: './pages/test/test.module#TestPageModule' },
  { path: 'device-details', loadChildren: './pages/device-details/device-details.module#DeviceDetailsPageModule' },
  {
    path: 'device-details/:id',
    resolve: {
      special: BleResolverService
    },
    loadChildren: './pages/device-details/device-details.module#DeviceDetailsPageModule'
  },
  { path: 'thermostat', loadChildren: './pages/thermostat/thermostat.module#ThermostatPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
