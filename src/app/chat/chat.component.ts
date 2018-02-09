import { Component, OnInit } from '@angular/core';
import {ChatService} from './chat.service';

@Component({
  selector: 'TA-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  msg = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService
      .getMessage()
      .subscribe(msg => {
        this.msg.push(msg);
      });
  }

  sendMsg(msg) {
    this.chatService.sendMessage(msg);
  }
}
