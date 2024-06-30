import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { InfoAsideChat } from './interfaces';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

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



  sendInfoConversation(chat: any) {
    this.openConversation.emit(chat);
  }
}
