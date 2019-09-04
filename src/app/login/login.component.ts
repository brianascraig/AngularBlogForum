import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {Member} from '../models/member.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  member: Member = new Member();

  ngOnInit() {
  }

}
