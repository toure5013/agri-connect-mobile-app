import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificationTitreFoncierPageRoutingModule } from './verification-titre-foncier-routing.module';

import { VerificationTitreFoncierPage } from './verification-titre-foncier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificationTitreFoncierPageRoutingModule
  ],
  declarations: [VerificationTitreFoncierPage]
})
export class VerificationTitreFoncierPageModule {}
