import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../../guards/auth-guard.guard';


export const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    canActivate: [AuthGuard]
  }
]
