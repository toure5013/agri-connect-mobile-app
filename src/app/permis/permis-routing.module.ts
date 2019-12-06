import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermisPage } from './permis.page';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PermisPage
  },
  {
    path: 'demander-permis',
    loadChildren: () => import('./demander-permis/demander-permis.module').then( m => m.DemanderPermisPageModule)
    ,canLoad: [AuthGuard]
  },
  {
    path: 'etat-permis',
    loadChildren: () => import('./etat-permis/etat-permis.module').then( m => m.EtatPermisPageModule)
    ,canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermisPageRoutingModule {}
