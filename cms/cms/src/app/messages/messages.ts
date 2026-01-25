import { Component } from '@angular/core';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageEditComponent } from './message-edit/message-edit.component';

@Component({
  selector: 'cms-messages',
  imports: [MessageListComponent, MessageEditComponent],
  templateUrl: './messages.html',
  styleUrl: './messages.css',
  template: `
    <div class="container">
      <h2>Messages</h2>
      <cms-message-list></cms-message-list>
      <cms-message-edit></cms-message-edit>
    </div>
  `
})
export class Messages {

}
