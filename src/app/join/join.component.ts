import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';
import { Router } from '@angular/router';
import { ChatBussinessService } from '../chat-bussiness.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  title = 'Sal Chat';
  userName: string = '';

  constructor(private chatService: ChatService,
    private chatBussinessService: ChatBussinessService,
    private router: Router) {

  }

  ngOnInit() {
  }

  public joinChat() {

    this.chatBussinessService.userJoined(this.userName);
    this.chatService.emit('join_event', { nickName: this.userName });
    this.router.navigateByUrl('/main');

  }

}
