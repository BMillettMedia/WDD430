import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageListChangedEvent = new Subject<Message[]>();

  private messages: Message[] = [];

  private baseUrl = 'http://localhost:3000/messages';

  constructor(private http: HttpClient) {}

  getMessages(): void {
    this.http.get<{ message: string, messages: Message[] }>(this.baseUrl)
      .subscribe(response => {
        this.messages = response.messages || [];
        this.messageListChangedEvent.next(this.messages.slice());
      });
  }

  addMessage(message: Message): void {

    if (!message) return;

    message.id = '';

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post<{ message: string, messageObj: Message }>(
      this.baseUrl,
      message,
      { headers }
    )
    .subscribe(response => {
      this.messages.push(response.messageObj);
      this.messageListChangedEvent.next(this.messages.slice());
    });
  }

  deleteMessage(message: Message): void {

    if (!message) return;

    const pos = this.messages.findIndex(m => m.id === message.id);
    if (pos < 0) return;

    this.http.delete(this.baseUrl + '/' + message.id)
      .subscribe(() => {
        this.messages.splice(pos, 1);
        this.messageListChangedEvent.next(this.messages.slice());
      });
  }
}