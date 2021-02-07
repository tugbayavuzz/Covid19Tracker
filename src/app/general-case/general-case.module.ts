import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralCasePageRoutingModule } from './general-case-routing.module';

import { GeneralCasePage } from './general-case.page';
import {GeneralCaseTableComponent} from '../general-case-table/general-case-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralCasePageRoutingModule
  ],
    declarations: [GeneralCasePage, GeneralCaseTableComponent]
})
export class GeneralCasePageModule {}
