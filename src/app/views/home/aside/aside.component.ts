import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { InfoAsideChat } from './interfaces';
import { HttpClientImplement } from '../../../shared/http-client';
import { environment } from '../../../../config';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

  constructor(private readonly httpClient: HttpClientImplement) { }
  /**
   * INPUTS
   * Herence from Home
   * @params Empty
   */
  @Input() chats: InfoAsideChat[] = [];

  /**
   * Outputs
   * @params Empty
   */
  @Output() openConversation = new EventEmitter<any>();


  nameContact: string = '';
  contacts: Array<{ id: number; name: string }> = [];
  sendInfoConversation(chat: any) {
    console.log(chat);
    this.openConversation.emit(chat);
  }

  async getContactsByName() {
    if (this.nameContact === '') {
      this.contacts = [];
      return;
    }
    const response = this.sendRequest().subscribe({
      next: (res: any) => {
        this.contacts = res;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  selectContact(contact: { id: number, name: string }) {
    const existContact = this.chats.find((chat) => chat.id === contact.id);

    if (existContact) {
      this.sendInfoConversation(existContact);
    }

    if (!existContact) {
      this.sendInfoConversation(contact);
    }
    this.resetFilter();

  }
  sendRequest() {
    const data = { user: this.nameContact };
    return this.httpClient.post(`${environment.URL_BACKEND}/chat/get-contacts-by-name`, data);
  }

  resetFilter() {
    this.contacts = [];
    this.nameContact = '';
  }


}
