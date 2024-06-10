import { Component } from '@angular/core';
import { io } from "socket.io-client";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  ngOnInit(): void {
    const socket = io("ws://localhost:3000");

    socket.on("connect", () => {
      console.log("Connected at socket.io");
    });

    socket.on("message", (data) => {
      console.log(data);
    });
  }
}
