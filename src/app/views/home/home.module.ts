import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { ChatComponent } from './chat/chat.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material/icon';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpClientImplement } from '../../shared/http-client';
import { AuthInterceptor } from '../../interceptors/auth.interceptor';
import { AuthGuard } from '../../guards/auth-guard.guard';
import { routes } from './home.routes';


@NgModule({
  declarations: [HomeComponent, AsideComponent, ChatComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    HttpClientImplement,
  ],
  exports: [HomeComponent, AsideComponent, ChatComponent]
})
export class HomeModule { }
