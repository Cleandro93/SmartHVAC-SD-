import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BleResolverService } from './resolver/ble-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'bluetooth', pathMatch: 'full' },
  {
        path: 'bluetooth',
        loadChildren: './bluetooth/bluetooth.module#BluetoothPageModule'
  },
  { path: 'device-details', loadChildren: './device-details/device-details.module#DeviceDetailsPageModule'},
  {
    path: 'device-details/:id',
    resolve: {
      special: BleResolverService
    },
    loadChildren: './device-details/device-details.module#DeviceDetailsPageModule'
  },
  { path: 'thermostat', loadChildren: './thermostat/thermostat.module#ThermostatPageModule' },
  { path: 'test', loadChildren: './test/test.module#TestPageModule' },
  { path: 'vibration-analysis', loadChildren: './vibration-analysis/vibration-analysis.module#VibrationAnalysisPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
