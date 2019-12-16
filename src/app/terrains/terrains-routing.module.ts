import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerrainsPage } from './terrains.page';

const routes: Routes = [
  {
    path: '',
    component: TerrainsPage,
  },
  {
    path: 'acheter/:terrainId',
    loadChildren: () => import('./acheter/acheter.module').then(m => m.AcheterPageModule)
  },
  {
    path: 'louer/:terrainId',
    loadChildren: () => import('./louer/louer.module').then(m => m.LouerPageModule)
  },
  {
    path: 'ajouter',
    loadChildren: () => import('./ajouter/ajouter.module').then(m => m.AjouterPageModule)
  },
  {
    path: 'liste-user-terrain',
    loadChildren: () => import('./lister-user-terrain/lister-user-terrain.module').then(m => m.ListerUserTerrainPageModule)
  },
  {
    path: 'suivit-etape-permis',
    loadChildren: () => import('./suivit-etape-permis/suivit-etape-permis.module').then( m => m.SuivitEtapePermisPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerrainsPageRoutingModule { }
