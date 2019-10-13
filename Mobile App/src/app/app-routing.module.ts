import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BleResolverService } from './pages/resolver/ble-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'pair', pathMatch: 'full' },
  { path: 'pair', loadChildren: './pages/pair/pair.module#PairPageModule' },
  { path: 'device-information', loadChildren: './pages/device-information/device-information.module#DeviceInformationPageModule' },
  { path: 'help', loadChildren: './pages/help/help.module#HelpPageModule' },
  { path: 'analysis-history', loadChildren: './pages/analysis-history/analysis-history.module#AnalysisHistoryPageModule' },
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
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
