import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LouerPage } from './louer.page';

const routes: Routes = [
  {
    path: '',
    component: LouerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LouerPageRoutingModule {}
