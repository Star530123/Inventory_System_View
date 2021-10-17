import { BaseResponse } from './../model/BaseResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseRequest } from '../model/BaseRequest';
import { map, pluck } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  postApi(apiUrl: string, req: any): Observable<any> {
    return this.http
      .post('http://localhost:8081/' + apiUrl, this.getReq(req))
      .pipe(pluck('result'));
  }

  getReq(req: any): BaseRequest {
    return {
      reqAccount: '',
      reqTime: '',
      body: req,
    };
  }
}
