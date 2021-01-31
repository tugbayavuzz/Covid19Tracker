import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralCasePageRoutingModule } from './general-case-routing.module';

import { GeneralCasePage } from './general-case.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralCasePageRoutingModule
  ],
  declarations: [GeneralCasePage]
})
export class GeneralCasePageModule {}
