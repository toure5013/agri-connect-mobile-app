import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPayementPage } from './new-payement.page';

const routes: Routes = [
  {
    path: '',
    component: NewPayementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPayementPageRoutingModule {}
