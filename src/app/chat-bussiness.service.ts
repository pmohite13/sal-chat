import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ChatBussinessService {

  constructor() { }

  private nickName = new BehaviorSubject<string>(null);

  public get nickName$() {
    return this.nickName.asObservable();
  }

  public userJoined(nickName) {
    this.nickName.next(nickName);
  }

}
