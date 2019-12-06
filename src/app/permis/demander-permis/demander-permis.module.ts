import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemanderPermisPageRoutingModule } from './demander-permis-routing.module';

import { DemanderPermisPage } from './demander-permis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemanderPermisPageRoutingModule
  ],
  declarations: [DemanderPermisPage]
})
export class DemanderPermisPageModule {}
