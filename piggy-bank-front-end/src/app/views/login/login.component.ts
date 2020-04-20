import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MessageService } from 'primeng/api';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(
    @Inject(DOCUMENT) private _document,
    private messageService: MessageService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this._document.body.style.background = '#F9AA33';
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const msgs = this.notificationService.getMessages();
      if (msgs.length > 0) {
        msgs.forEach(
          msg => {
            this.messageService.add(msg);
          }
        );
        this.notificationService.clear();
      }
    });
  }

  ngOnDestroy() {
    this._document.body.style.background = '#FFF';
  }

}
