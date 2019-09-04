import { Injectable } from '@angular/core';
import {HttpClientModule, HttpResponse, HttpHeaders, HttpRequest, HttpClient, HttpHeaderResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import {Member} from './models/member.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type, Access-Control-Allow-Headers, Authorization',
    'Access-Control-Allow-Credentials': 'true'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  private memberUrl = 'http://localhost:8082/members/';

  public getMember() {
    return this.httpClient.get<Member[]>(this.memberUrl);
  }

  public createMember(member) {
    return this.httpClient.post<Member[]>(this.memberUrl, member, httpOptions);
  }
}
