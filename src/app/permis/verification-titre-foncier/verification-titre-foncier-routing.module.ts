import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificationTitreFoncierPage } from './verification-titre-foncier.page';

const routes: Routes = [
  {
    path: '',
    component: VerificationTitreFoncierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificationTitreFoncierPageRoutingModule {}
