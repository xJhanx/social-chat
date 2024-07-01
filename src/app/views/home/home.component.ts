import { Component } from '@angular/core';
import { io } from "socket.io-client";
import { HttpClientImplement } from '../../shared/http-client';
import { environment } from '../../../config';
import { HomeService } from './services/home.service';
import { User, UserInstance} from '../../shared/user.service';
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

  chats = [];
  ownerUser : UserInstance | null = null;
  messages: Conversation[] | [] = [];
  recipientInfo: { id: number; name: string, room: number } = {id: 0, name: '', room: 0};
  isActiveChat : boolean = false;
  async ngOnInit() {
    const socket = await this.socketService.getInstance();
    socket.on("message_event", (roomId) => {
      this.getMessages(roomId);
    });
    this.httpClient.post(`${environment.URL_BACKEND}/chat/get-chats`, {}).subscribe({
      next: (response: any) => {
        this.chats = response;
      },
      error: (error) => {
        console.log("ha ocurrido un error", error);
      }
    });
    this.ownerUser = this.userInstance.getInfo();

  }

  async openConversation(conversation: { id: number; name: string, room: number }) {
    this.getMessages(conversation.room);
    this.isActiveChat = true;
    this.recipientInfo = conversation;
  }

  getMessages(roomId : number){
    this.homeService.getConversation(roomId).subscribe({
      next: (response) => {
        this.messages = response;
      },
      error: (error) => {
        console.log("ha ocurrido un error Obteniendo los mensajes", error);
        return [];
      }
    });
  }

  messageSended(data:any){
    this.getMessages(this.recipientInfo.room);
  }

}
