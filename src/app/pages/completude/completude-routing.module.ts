import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletudePage } from './completude.page';

const routes: Routes = [
  {
    path: '',
    component: CompletudePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletudePageRoutingModule {}
