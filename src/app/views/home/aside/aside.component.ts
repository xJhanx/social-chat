import { Component, Input, SimpleChanges } from '@angular/core';
import { InfoAsideChat } from './interfaces';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

  //variable heredada
  @Input() chats: InfoAsideChat[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chats']) {
      console.log('chats input has changed:', changes['chats'].currentValue);
      // Aquí puedes agregar la lógica que necesites cuando `chats` cambie
    }
  }

  openChat(id: number) {
    console.log("abriendo sala con id ", id);

  }
}
