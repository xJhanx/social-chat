import { Injectable } from "@angular/core";
import { HttpClientImplement } from "../../../shared/http-client";
import { environment } from "../../../../config";
import { Observable } from "rxjs";
import { Conversation, sendMessage } from "../Interfaces";

@Injectable()

export class HomeService {
  constructor(private readonly httpClient: HttpClientImplement) { }

  getConversation(room_id: number): Observable<Conversation[]> {
    return this.httpClient.post<Conversation[]>(`${environment.URL_BACKEND}/chat/get-conversation`, { room_id });
  }

  sendMessage( data : sendMessage ) {
    return this.httpClient.post(`${environment.URL_BACKEND}/chat/send-message`, data);
  }
}

