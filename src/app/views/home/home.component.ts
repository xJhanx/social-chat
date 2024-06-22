import { Component } from '@angular/core';
import { io } from "socket.io-client";
import { HttpClientImplement } from '../../shared/http-client';
import { environment } from '../../../config';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private readonly httpClient: HttpClientImplement) {}

  chats = [];

  ngOnInit(): void {
    this.httpClient.post(`${environment.URL_BACKEND}/chat/get-chats`, {}).subscribe({
      next: (response: any) => {
        this.chats = response;
      },
      error: (error) => {
        console.log("ha ocurrido un error", error);
      }
    });

    // const socket = io("ws://localhost:3000");

    // socket.on("connect", () => {
    //   console.log("Connected at socket.io");
    // });

    // socket.on("message", (data) => {
    //   console.log(data);
    // });
  }
}
