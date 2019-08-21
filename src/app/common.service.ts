import { Injectable } from '@angular/core';
import {HttpResponse, HttpHeaders, HttpRequest, HttpClient} from '@angular/common/http';

import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  saveMember(member) {
    return this.httpClient.post('http://localhost:8080/api/SaveMember/', member)
      .pipe(map((response: any) => response.json()));
  }

  GetMember() {
    return this.httpClient.get('http://localhost:8080/api/getMember/').pipe(map((response: Response) => response.json()));
  }

  deleteMember(id) {
    return this.httpClient.post('http://localhost:8080/api/deleteMember/', {id})
      .pipe(map((response: any) => response.json()));
  }
}
