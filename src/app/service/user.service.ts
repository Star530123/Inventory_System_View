import { LoginRes } from '../model/login/LoginRes';
import { LoginReq } from '../model/login/LoginReq';
import { NewUserRes } from '../model/create-account/NewUserRes';
import { NewUserReq } from '../model/create-account/NewUserReq';
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

  newUser(req: NewUserReq): Observable<NewUserRes> {
    return this.http.postApi(this.apiUrl + 'newUser', req);
  }

  login(req: LoginReq): Observable<LoginRes> {
    return this.http.postApi(this.apiUrl + 'login', req);
  }
}
