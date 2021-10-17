import { Observable } from 'rxjs';
import { HttpClientService } from './../../service/http-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  data?: Observable<any>;

  constructor(private http: HttpClientService) {}

  ngOnInit(): void {}

}
