import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayementPage } from './payement.page';

const routes: Routes = [
  {
    path: '',
    component: PayementPage
  },
  {
    path: 'liste-payement',
    loadChildren: () => import('./liste-payement/liste-payement.module').then( m => m.ListePayementPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayementPageRoutingModule {}
