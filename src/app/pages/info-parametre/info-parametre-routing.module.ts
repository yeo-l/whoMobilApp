import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoParametrePage } from './info-parametre.page';

const routes: Routes = [
  {
    path: '',
    component: InfoParametrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoParametrePageRoutingModule {}
