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
import { routes } from './home.routes';
import { HomeService } from './services/home.service';
import { User } from '../../shared/user.service';
import { JwtService } from '../../shared/jwt.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketIoService } from '../../shared/socket';


@NgModule({
  declarations: [HomeComponent, AsideComponent, ChatComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    HttpClientImplement,
    HomeService,
    User,
    JwtService,
    SocketIoService
  ],
  exports: [HomeComponent, AsideComponent, ChatComponent]
})
export class HomeModule { }
