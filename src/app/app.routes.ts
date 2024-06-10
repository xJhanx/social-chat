import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path : 'home',
    loadChildren : () => import('./views/home/home.module').then(m => m.HomeModule),
  },
  {
    path : 'auth',
    loadChildren : () => import('./views/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path : '',
    redirectTo : '/home',
    pathMatch : 'full'
  },
  {
    path: 'noview-found',
    loadChildren: () => import('./views/no-found-view/no-found-view.module').then(m => m.NoFoundViewModule)
  },
  {
    path : '**',
    redirectTo : '/noview-found',
    pathMatch : 'full'
  }

]
