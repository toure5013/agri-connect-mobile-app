import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListerUserTerrainPage } from './lister-user-terrain.page';

const routes: Routes = [
  {
    path: '',
    component: ListerUserTerrainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListerUserTerrainPageRoutingModule {}
