import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Conversation } from '../Interfaces';
import { User } from '../../../shared/user.service';
import { HomeService } from '../services/home.service';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnChanges {
  constructor(
    private readonly usersService: User,
    private readonly homeService: HomeService,
  ) { }
  @Input() messages: Conversation[] = [];
  @Input() isActiveChat: boolean = false;
  @Input() recipientInfo: { id: number, name: string, room: number } = { id: 0, name: '', room: 0 };
  @Output() messageSended: EventEmitter<any> = new EventEmitter();

  @ViewChild('scrollableDiv') private scrollableDiv!: ElementRef;

  owsnerUser: any = {}
  message = new FormControl('',Validators.required);



  ngOnInit(): void {
    this.owsnerUser = this.usersService.getInfo();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.messages.length > 0){
      setTimeout(() => {
        this.scrollableDiv.nativeElement.scrollTop = this.scrollableDiv.nativeElement.scrollHeight;
      }, 0);
    }
  }

  sendMessage() {
    if (!this.message.valid) return;
    const data = {
      message: this.message.value!,
      room_id: this.recipientInfo.room,
      recipient_id: this.recipientInfo.id
    }
    this.homeService.sendMessage(data).subscribe({
      next: (res) => {
        this.messageSended.emit(true);
        this.message.setValue('');
      },
      error: (error) => {
        console.log("ha ocurrido un error", error);
      }
    });

  }

}
