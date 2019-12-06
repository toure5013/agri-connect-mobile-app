import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtatPermisPageRoutingModule } from './etat-permis-routing.module';

import { EtatPermisPage } from './etat-permis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtatPermisPageRoutingModule
  ],
  declarations: [
    EtatPermisPage,
  ]
})
export class EtatPermisPageModule {}
