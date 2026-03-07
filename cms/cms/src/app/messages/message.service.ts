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
  getMessages(): void {

    this.http.get<Message[]>(this.firebaseUrl)
      .subscribe(
        (messages: Message[]) => {

          this.messages = messages || [];
          this.maxMessageId = this.getMaxId();

          this.messageListChangedEvent
            .next(this.messages.slice());
        },
        (error) => console.error(error)
      );
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