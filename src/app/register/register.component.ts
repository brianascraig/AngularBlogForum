import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {CommonService} from '../common.service';
import {AbstractControl, ValidationErrors} from '@angular/forms';
import {error} from 'util';
import {LoginComponent} from '../login/login.component';
import {Router} from '@angular/router';
import {Member} from '../models/member.model';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private commonService: CommonService) { }

  member: Member = new Member();

  createMember(): void {
    this.commonService.createMember(this.member)
      .subscribe(data => {
        alert('Member added');
      });
  }



  ngOnInit() {

  }

}
