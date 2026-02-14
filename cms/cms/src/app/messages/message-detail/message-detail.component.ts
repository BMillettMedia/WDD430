import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'cms-message-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {

  message: Message | null = null;

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      const id: string = params['id'];

      const foundMessage = this.messageService.getMessage(id);

      if (foundMessage) {
        this.message = foundMessage;
      } else {
        this.message = null;
      }

    });

  }

}
