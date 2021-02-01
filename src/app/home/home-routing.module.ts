import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {HomeTableComponent} from '../home-table/home-table.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes), IonicModule, CommonModule],
  exports: [RouterModule, HomeTableComponent],
  declarations: [
    HomeTableComponent
  ]
})
export class HomePageRoutingModule {}
