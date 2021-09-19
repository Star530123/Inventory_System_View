import { HttpClientService } from './../../service/http-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  data: any = null;

  constructor(private http: HttpClientService) {}

  ngOnInit(): void {}

  getProduct() {
    this.http.getProduct().subscribe((result) => (this.data = result));
  }
}
