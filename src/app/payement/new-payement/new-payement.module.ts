import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPayementPageRoutingModule } from './new-payement-routing.module';

import { NewPayementPage } from './new-payement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPayementPageRoutingModule
  ],
  declarations: [NewPayementPage]
})
export class NewPayementPageModule {}
