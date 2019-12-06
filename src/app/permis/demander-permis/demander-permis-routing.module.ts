import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemanderPermisPage } from './demander-permis.page';

const routes: Routes = [
  {
    path: '',
    component: DemanderPermisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemanderPermisPageRoutingModule {}
