import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)},
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
   path: 'info-parametre',
      loadChildren: () => import('./pages/info-parametre/info-parametre.module').then( m => m.InfoParametrePageModule)
  },
  {
   path: 'footer',
      loadChildren: () => import('./pages/footer/footer.module').then( m => m.FooterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
