import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemptompPageRoutingModule } from './semptomp-routing.module';

import { SemptompPage } from './semptomp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemptompPageRoutingModule
  ],
  declarations: [SemptompPage]
})
export class SemptompPageModule {}
