import { Component, Input, SimpleChanges } from '@angular/core';
import { Conversation } from '../Interfaces';
import { User, UserInstance } from '../../../shared/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  constructor(
    private readonly usersService: User
  ) {}
  @Input() messages: Conversation[] = [];
  @Input() isActiveChat : boolean = false;
  owsnerUser : any  = {}

  ngOnInit(): void {
    this.owsnerUser = this.usersService.getInfo();
    console.log(this.owsnerUser);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.messages);
  }

}
