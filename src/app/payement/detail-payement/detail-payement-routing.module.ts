import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPayementPage } from './detail-payement.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPayementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPayementPageRoutingModule {}
