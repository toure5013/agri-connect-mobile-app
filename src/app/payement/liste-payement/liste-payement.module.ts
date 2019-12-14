import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListePayementPageRoutingModule } from './liste-payement-routing.module';

import { ListePayementPage } from './liste-payement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListePayementPageRoutingModule
  ],
  declarations: [ListePayementPage]
})
export class ListePayementPageModule {}
