import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { routesAuth } from './auth.routes';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientImplement } from '../../shared/http-client';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routesAuth),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpClientImplement],
  exports: [LoginComponent, RouterModule, RegisterComponent],
})
export class AuthModule { }
