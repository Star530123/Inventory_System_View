import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  apiurl: string = '';
  constructor(private http: HttpClient) {}

  getProduct(): Observable<any>{
    return this.http.post("http://localhost:8081/research",null);
  }
}
