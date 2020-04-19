import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit(): void {
    this._document.body.style.background = '#F9AA33';
  }

  ngOnDestroy() {
    this._document.body.style.background = '#FFF';
  }

}
