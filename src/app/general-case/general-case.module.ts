import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralCasePageRoutingModule } from './general-case-routing.module';

import { GeneralCasePage } from './general-case.page';
import {GeneralCaseTableComponent} from '../general-case-table/general-case-table.component';
import {GoogleMapsModule} from '@angular/google-maps';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GeneralCasePageRoutingModule,
        GoogleMapsModule
    ],
    declarations: [GeneralCasePage, GeneralCaseTableComponent]
})
export class GeneralCasePageModule {}
