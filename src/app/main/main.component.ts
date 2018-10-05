import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';
import { debug } from 'util';
import { ChatBussinessService } from '../chat-bussiness.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public nickName: string;
  public users: any = [];
  public chatFormGroup: FormGroup;
  public messages: any = [];
  public likes: any = [];

  constructor(private chatService: ChatService,
    private chatBusinessServe: ChatBussinessService,
    private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.buildFormGroup();
    this.chatBusinessServe.nickName$.subscribe(nickName => {
      this.nickName = nickName;
    });

    this.chatService.on('all_users')
      .subscribe((message: any) => {
        this.users = message.filter(user => user.nickName !== this.nickName);
      });

    this.chatService.on('message_received')
      .subscribe((message: any) => {
        debugger;
        this.messages.push(message);
      });

    this.chatService.on('recieved_like')
      .subscribe((message: any) => {
        this.likes.push(message['from']);
      });

  }

  public buildFormGroup() {
    this.chatFormGroup = this.formBuilder.group({
      message: ['']
    })
  }



  public onSend() {
    debugger;
    let newMessage = {
      from: this.nickName,
      message: this.chatFormGroup.get('message').value
    }
    this.cleanMessage();
    this.chatService.emit('send_message', newMessage);
  }

  public sendLike(user) {
    debugger;
    let likeObj = {
      from: this.nickName,
      like: user['socketId']
    }
    this.chatService.emit('send_like', likeObj);
  }




  private cleanMessage() {
    this.chatFormGroup.patchValue({
      message: ''
    });
  }
}
