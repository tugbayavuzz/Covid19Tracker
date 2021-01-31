import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralCasePage } from './general-case.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralCasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralCasePageRoutingModule {}
