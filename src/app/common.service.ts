import { Injectable } from '@angular/core';
import {HttpResponse, HttpHeaders, HttpRequest, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import {Member} from './models/member.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  private memberUrl = 'http://localhost:8080/RestfulService/rest/member/members';

  public getMember() {
    return this.httpClient.get<Member[]>(this.memberUrl);
  }

  public createMember(member) {
    return this.httpClient.post<Member>(this.memberUrl, member);
  }

  // saveMember(member) {
  //   return this.httpClient.post('http://localhost:27017/memberDB', member)
  //     .pipe(map((response: any) => response.json()));
  // }
  //
  // getMember() {
  //   return this.httpClient.get('http://localhost:8080/api/getMember/').pipe(map((response: Response) => response.json()));
  // }
  //
  // deleteMember(id) {
  //   return this.httpClient.post('http://localhost:8080/api/deleteMember/', {id})
  //     .pipe(map((response: any) => response.json()));
  // }
}
