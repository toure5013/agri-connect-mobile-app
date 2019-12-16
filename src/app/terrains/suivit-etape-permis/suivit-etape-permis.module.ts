import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuivitEtapePermisPageRoutingModule } from './suivit-etape-permis-routing.module';

import { SuivitEtapePermisPage } from './suivit-etape-permis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuivitEtapePermisPageRoutingModule
  ],
  declarations: [SuivitEtapePermisPage]
})
export class SuivitEtapePermisPageModule {}
