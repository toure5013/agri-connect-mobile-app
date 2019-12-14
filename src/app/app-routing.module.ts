import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'permis',
    loadChildren: () => import('./permis/permis.module').then( m => m.PermisPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'payement',
    loadChildren: () => import('./payement/payement.module').then( m => m.PayementPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'terrains',
    loadChildren: () => import('./terrains/terrains.module').then( m => m.TerrainsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
