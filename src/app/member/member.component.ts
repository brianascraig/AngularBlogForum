import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommonService} from '../common.service';
import { Member } from '../models/member.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  members: Member[];

  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getMember()
      .subscribe(data => {
        this.members = data;
      });
  }


}
