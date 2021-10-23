import { LoginRes } from './../model/Login/LoginRes';
import { LoginReq } from './../model/Login/LoginReq';
import { CreateAccountRes } from '../model/CreateAccount/NewUserRes';
import { CreateAccountReq } from '../model/CreateAccount/NewUserReq';
import { Observable } from 'rxjs';
import { HttpClientService } from './http-client.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'api/user/';
  constructor(private http: HttpClientService) {}

  newUser(req: CreateAccountReq): Observable<CreateAccountRes> {
    return this.http.postApi(this.apiUrl + 'newUser', req);
  }

  login(req: LoginReq): Observable<LoginRes> {
    return this.http.postApi(this.apiUrl + 'login', req);
  }
}
