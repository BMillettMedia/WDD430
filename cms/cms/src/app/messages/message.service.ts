import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageListChangedEvent = new Subject<Message[]>();

  messages: Message[] = [];
  maxMessageId: number = 0;

  // Replace with Firebase URL
  private firebaseUrl =
    'https://wdd430-4e51e-default-rtdb.firebaseio.com/messages.json';

  constructor(private http: HttpClient) {}

  // =========================
  // GET MESSAGES
  // =========================
getMessages() {

  this.http.get<{message:string, messages:any}>(
    'http://localhost:3000/messages'
  )
  .subscribe(response => {

    this.messages = response.messages.map((message:any) => {
      return {
        id: message._id,
        subject: message.subject,
        messageText: message.messageText,
        sender: message.sender
      };
    });

    this.messageListChangedEvent.next(this.messages.slice());

  });

}

  // =========================
  // GET SINGLE MESSAGE (ADDED FIX)
  // =========================
  getMessage(id: string): Message | null {

    for (let message of this.messages) {
      if (message.id === id) {
        return message;
      }
    }

    return null;
  }

  // =========================
  // ADD MESSAGE
  // =========================
  addMessage(message: Message): void {

    if (!message) return;

    message.id = (++this.maxMessageId).toString();

    this.messages.push(message);
    this.storeMessages();
  }

  // =========================
  // DELETE MESSAGE
  // =========================
  deleteMessage(message: Message): void {

    this.messages =
      this.messages.filter(m => m.id !== message.id);

    this.storeMessages();
  }

  // =========================
  // STORE MESSAGES
  // =========================
  storeMessages(): void {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.put(this.firebaseUrl, this.messages, { headers })
      .subscribe(() => {
        this.messageListChangedEvent
          .next(this.messages.slice());
      });
  }

  // =========================
  // GET MAX ID
  // =========================
  getMaxId(): number {

    return this.messages.reduce(
      (max, msg) => Math.max(max, +msg.id),
      0
    );
  }

}