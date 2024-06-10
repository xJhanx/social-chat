import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { routesAuth } from './auth.routes';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routesAuth),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [LoginComponent,RouterModule],
})
export class AuthModule { }
