import { Routes } from '@angular/router';
import { ViewNotFoundComponent } from './views/view-not-found/view-not-found.component';

export const routes: Routes = [
  {
    path : 'home',
    loadComponent: () => import('./views/chat-layout/chat-layout.component').then(c => c.ChatLayoutComponent)
  },
  {
    path: 'noview-found',
    component : ViewNotFoundComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/noview-found',
    pathMatch: 'full'
  }
]
