import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'deconnexion',
    loadChildren: () => import('./deconnexion/deconnexion.module').then( m => m.DeconnexionPageModule),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
