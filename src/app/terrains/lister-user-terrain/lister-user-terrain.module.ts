import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListerUserTerrainPageRoutingModule } from './lister-user-terrain-routing.module';

import { ListerUserTerrainPage } from './lister-user-terrain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListerUserTerrainPageRoutingModule
  ],
  declarations: [ListerUserTerrainPage]
})
export class ListerUserTerrainPageModule {}
