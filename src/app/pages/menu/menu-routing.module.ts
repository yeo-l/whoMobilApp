import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {path: 'parametrage', loadChildren: () => import('../parametrage/parametrage.module').then( m => m.ParametragePageModule)},
      { path: 'home', loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)},
      {path: 'completude', loadChildren: () => import('../completude/completude.module').then( m => m.CompletudePageModule)},
      {path: 'analytic', loadChildren: () => import('../analytic/analytic.module').then( m => m.AnalyticPageModule)},
      {path: 'time', loadChildren: () => import('../time/time.module').then( m => m.TimePageModule)},
      {path: 'data', loadChildren: () => import('../data/data.module').then( m => m.DataPageModule)},
     // {path: 'login', loadChildren: () => import('../login/login.module').then( m => m.DataPageModule)},
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
