import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
  {
    path : 'home',
    loadChildren : () => import('./views/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path : 'auth',
    children : [
      {
        path : 'login',
        loadComponent : () => import('./views/auth/login/login.component').then(component => component.LoginComponent)
      },
      {
        path : 'register',
        loadComponent : () => import('./views/auth/register/register.component').then( component => component.RegisterComponent)
      },
      {
        path : 'recovery-password',
        loadComponent : () => import('./views/auth/recovery-password/recovery-password.component').then(component => component.RecoveryPasswordComponent)
      },
      {
        path : 'forgot-password',
        loadComponent : () => import('./views/auth/forgot-password/forgot-password.component').then(component => component.ForgotPasswordComponent)
      }
    ]
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
