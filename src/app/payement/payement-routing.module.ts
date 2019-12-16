import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayementPage } from './payement.page';

const routes: Routes = [
  {
    path: '',
    component: PayementPage
  },
  {
    path: 'detail-payement/:reference',
    loadChildren: () => import('./detail-payement/detail-payement.module').then( m => m.DetailPayementPageModule)
  },
  {
    path: 'new-payement',
    loadChildren: () => import('./new-payement/new-payement.module').then( m => m.NewPayementPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayementPageRoutingModule {}
