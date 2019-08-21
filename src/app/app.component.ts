import { Component, Inject, OnInit } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormGroup, FormControl, Validators, FormsModule, AbstractControl, ValidationErrors} from '@angular/forms';
import {CommonService} from './common.service';

import {HttpClientModule, HttpClient, HttpResponse, HttpHeaders, HttpRequest} from '@angular/common/http';
import {error} from 'util';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {
  }

  title = 'Angular2';


  ngOnit() {

  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '550px'
    });
  }

  openRegisterDialog() {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '550px'
    });
  }
}
