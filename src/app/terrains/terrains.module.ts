import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerrainsPageRoutingModule } from './terrains-routing.module';

import { TerrainsPage } from './terrains.page';
import { InfoTerrainComponent } from './info-terrain/info-terrain.component';
import { modalController } from '@ionic/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TerrainsPageRoutingModule,
  ],
  entryComponents: [InfoTerrainComponent],
  declarations: [InfoTerrainComponent, TerrainsPage]
})
export class TerrainsPageModule {}
