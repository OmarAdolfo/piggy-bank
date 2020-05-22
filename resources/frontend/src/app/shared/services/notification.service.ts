import { Injectable } from '@angular/core';
import { Message } from 'primeng/api/message';

@Injectable()
export class NotificationService {

  private msgs: Message[] = [];

  constructor() { }

  addMessage(message: Message) {
    this.msgs.push(message);
  }

  getMessages() {
    return this.msgs;
  }

  clear() {
    this.msgs = [];
  }

}
