import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {CommonService} from '../common.service';
import {AbstractControl, ValidationErrors} from '@angular/forms';
import {error} from 'util';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private errorMessage: any;
  private id: string | number;
  private username: string;
  private password: string;
  private email: string;

  constructor(public commonService: CommonService) { }
  Repdata;
  valbutton = 'Save';

  ngOnInit() {
    this.commonService.GetMember().subscribe(data => this.Repdata = data);
  }

  onSave = member => {
    member.mode = this.valbutton;
    this.commonService.saveMember(member).subscribe(
      data => {
        alert(data.data);
        this.ngOnInit();
      }
      , saveError => this.errorMessage = error);
  }
  edit = (kk) => {
    this.id = kk._id;
    this.username = kk.username;
    this.password = kk.password;
    this.email = kk.email;
    this.valbutton = 'Update';
  }

  delete = (id) => {
    this.commonService.deleteMember(id)
      .subscribe(data => {
          alert(data.data);
          this.ngOnInit();
        },
        deleteError => this.errorMessage = error);
  }

}
