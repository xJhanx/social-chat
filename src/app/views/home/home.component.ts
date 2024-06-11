import { Component } from '@angular/core';
import { io } from "socket.io-client";
import { HttpClientImplement } from '../../shared/http-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private readonly httpClient: HttpClientImplement) {

  }
  ngOnInit(): void {
    this.httpClient.post('http://localhost:3000/chat/send-message', {}).subscribe({
      next: (response: any) => {
        console.log("Estamos conectados al backend del chat", response);

      },
      error: (error) => {
        console.log("ha ocurrido un error", error);
      }
    });

    const socket = io("ws://localhost:3000");

    socket.on("connect", () => {
      console.log("Connected at socket.io");
    });

    socket.on("message", (data) => {
      console.log(data);
    });
  }
}
