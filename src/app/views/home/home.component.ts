import { Component } from '@angular/core';
import { io } from "socket.io-client";
import { HttpClientImplement } from '../../shared/http-client';
import { environment } from '../../../config';
import { HomeService } from './services/home.service';
import { User, UserInstance} from '../../shared/user.service';
import { Conversation } from './Interfaces';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private readonly httpClient: HttpClientImplement,
    private readonly homeService: HomeService,
    private readonly userInstance: User
) {}

  chats = [];
  ownerUser : UserInstance | null = null;
  messages: Conversation[] | [] = [];
  isActiveChat : boolean = false;
  ngOnInit(): void {
    this.httpClient.post(`${environment.URL_BACKEND}/chat/get-chats`, {}).subscribe({
      next: (response: any) => {
        this.chats = response;
      },
      error: (error) => {
        console.log("ha ocurrido un error", error);
      }
    });

    this.ownerUser = this.userInstance.getInfo();

    console.log(this.ownerUser);

    // const socket = io("ws://localhost:3000");

    // socket.on("connect", () => {
    //   console.log("Connected at socket.io");
    // });

    // socket.on("message", (data) => {
    //   console.log(data);
    // });
  }

  openConversation(conversation: { id: number; name: string, room: number }) {
    console.log("abriendo sala con id ", conversation);
    this.homeService.getConversation(conversation.room).subscribe({
      next: (response) => {
        this.isActiveChat = true;
        this.messages = response;
      },
      error: (error) => {
        console.log("ha ocurrido un error", error);
      }
    });
  }
}
