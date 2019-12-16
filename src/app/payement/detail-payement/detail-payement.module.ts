import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPayementPageRoutingModule } from './detail-payement-routing.module';

import { DetailPayementPage } from './detail-payement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPayementPageRoutingModule
  ],
  declarations: [DetailPayementPage]
})
export class DetailPayementPageModule {}
