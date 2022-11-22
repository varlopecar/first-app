import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkPage } from './work.page';

const routes: Routes = [
  {
    path: '',
    component: WorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkPageRoutingModule {}
