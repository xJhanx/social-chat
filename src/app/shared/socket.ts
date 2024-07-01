import { Injectable } from '@angular/core';
import { Socket, io } from 'socket.io-client';
import { environment } from '../../config';
import { User } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  private static instance: SocketIoService;
  public socket: Socket | null = null;

  constructor(private readonly userService : User) {
    if (!SocketIoService.instance) {
      SocketIoService.instance = this;
    }
    return SocketIoService.instance;
  }

  async initialize(): Promise<boolean> {
    try {
      this.socket = io(environment.URL_SOCKET);
      this.socket.auth = { iduser: this.userService.getInfo()?.id ,username: this.userService.getInfo()?.name};
      this.socket.on('connect', () => {
        console.log('Connected to socket server');
        console.log("Este es mi id socket: ", this.socket?.id);
      });

      this.socket.on('connect_error', (error: any) => {
        console.error('Connection error:', error);
      });

      this.socket.on('message', (message: any) => {
        console.log("Recibimos : ",message);
      })
      return true;
    } catch (error) {
      console.error('Socket initialization failed:', error);
      return false;
    }
  }

  getInstance(): Socket {
    if (this.socket == null) {
      throw new Error('Socket not initialized');
    }
    return this.socket;
  }
}
