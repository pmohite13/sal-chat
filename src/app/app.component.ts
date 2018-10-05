import { Component } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sal Chat';
  userName: string = '';


  constructor(private chatService: ChatService,
    private router: Router) {


  }

  // public joinChat() {
  //   //this.chatService.sendMessage({ message: 'Hello From Client'});
  //    this.router.navigateByUrl('/main');

  //   // this.router.navigate(['/main']);
  // }

}