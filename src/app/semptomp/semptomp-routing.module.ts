import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemptompPage } from './semptomp.page';

const routes: Routes = [
  {
    path: '',
    component: SemptompPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemptompPageRoutingModule {}
