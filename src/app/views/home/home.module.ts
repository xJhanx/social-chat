import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { ChatComponent } from './chat/chat.component';
import { RouterModule } from '@angular/router';
import { routes } from './home.routes';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [HomeComponent,AsideComponent,ChatComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes) // Importa y configura las rutas definidas
  ],
  exports: [HomeComponent,AsideComponent,ChatComponent]
})
export class HomeModule { }
