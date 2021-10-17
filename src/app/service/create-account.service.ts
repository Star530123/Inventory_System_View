import { CreateAccountRes } from './../model/response/CreateAccountRes';
import { CreateAccountReq } from './../model/request/CreateAccountReq';
import { Observable } from 'rxjs';
import { HttpClientService } from './http-client.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  apiUrl = '';
  constructor(private http: HttpClientService) { }

  newUser(req: CreateAccountReq): Observable<CreateAccountRes> {
    return this.http.postApi(this.apiUrl + 'newUser', req);
  }
}
