import { BaseResponse } from './../model/BaseResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { BaseRequest } from '../model/BaseRequest';
import { catchError, map, pluck, tap } from 'rxjs/operators';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient, private location: Location) {}

  postApi(apiUrl: string, req: any): Observable<any> {
    return this.http
      .post('http://localhost:8081/' + apiUrl, this.getReq(req))
      .pipe(
        tap((result) => this.checkError(result)),
        pluck('result'),
        catchError((err) => throwError('系統錯誤'))
      );
  }

  getReq(req: any): BaseRequest {
    return {
      reqAccount: '',
      reqTime: '',
      body: req,
    };
  }

  checkError(res: any): void {
    console.log(res);
    if (res.rtnCode !== '0000') {
      alert(res.rtnMsg);
    }
  }
}
