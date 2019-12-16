import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuivitEtapePermisPage } from './suivit-etape-permis.page';

const routes: Routes = [
  {
    path: '',
    component: SuivitEtapePermisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuivitEtapePermisPageRoutingModule {}
