import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

export const routesAuth: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'recovery-password',
    component: RecoveryPasswordComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }
]
