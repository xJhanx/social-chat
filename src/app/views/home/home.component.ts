import { Component } from '@angular/core';
import { io } from "socket.io-client";
import { HttpClientImplement } from '../../shared/http-client';
import { environment } from '../../../config';
import { HomeService } from './services/home.service';
import { User, UserInstance } from '../../shared/user.service';
import { Conversation } from './Interfaces';
import { SocketIoService } from '../../shared/socket';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private readonly httpClient: HttpClientImplement,
    private readonly homeService: HomeService,
    private readonly userInstance: User,
    private readonly socketService: SocketIoService
  ) {
    this.socketService.initialize();
  }

  chats :Array<any> = [];
  ownerUser: UserInstance | null = null;
  messages: Conversation[] | [] = [];
  recipientInfo: { id: number; name: string, room: number; statusLine: boolean } = { id: 0, name: '', room: 0, statusLine: false };
  isActiveChat: boolean = false;
  async ngOnInit() {
    const socket = await this.socketService.getInstance();
    this.getChats();
    this.ownerUser = this.userInstance.getInfo();

    socket.on("message_event", (roomId) => {
      this.getMessages(roomId);
    });

    await this.socketService.socket?.on('user_connected', (idUser) => {
      console.log("user", idUser, "vs", this.chats);

      if (this.chats.length > 0) {
        const index = this.chats.findIndex((chat) => chat.id == idUser);
        this.chats[index].statusLine = true;
      }

    });

    this.socketService.socket?.on('user_disconnected', (idUser) => {
      if (this.chats.length > 0) {
        const index = this.chats.findIndex((chat) => chat.id == idUser);
        this.chats[index].statusLine = false;
      }
    });


  }

  async openConversation(conversation: { id: number; name: string, room: number; statusLine: boolean }) {
    if (conversation.room) {
      this.getMessages(conversation.room);
    }

    if (!conversation.room) {
      this.messages = [];
      this.isActiveChat = true;
    }

    this.recipientInfo = conversation;
  }

  getMessages(roomId: number) {
    this.homeService.getConversation(roomId).subscribe({
      next: (response) => {
        this.messages = response;
        this.isActiveChat = true;
      },
      error: (error) => {
        console.log("ha ocurrido un error Obteniendo los mensajes", error);
        return [];
      }
    });
  }

  getChats(): void {
    this.httpClient.post(`${environment.URL_BACKEND}/chat/get-chats`, {}).subscribe({
      next: (response: any) => {
        this.chats = response;
      },
      error: (error) => {
        console.log("ha ocurrido un error", error);
      }
    });
  }

  messageSended(idRoom: any) {
    this.getMessages(idRoom);
    this.getChats();
  }

}
