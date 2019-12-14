import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LouerPageRoutingModule } from './louer-routing.module';

import { LouerPage } from './louer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LouerPageRoutingModule
  ],
  declarations: [LouerPage]
})
export class LouerPageModule {}
