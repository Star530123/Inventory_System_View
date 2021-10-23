import { Router } from '@angular/router';
import { AccountDataService } from './../../service/account-data.service';
import { UserService } from './../../service/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClientService } from './../../service/http-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  data?: Observable<any>;
  form = new FormGroup({
    account: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private userService: UserService,
    private accountDataService: AccountDataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(): void {
    this.userService
      .login({
        account: this.form.value.account,
        password: this.form.value.password,
      })
      .subscribe((result) => {
        this.accountDataService.account = result.account;
        this.accountDataService.userName = result.userName;
        this.router.navigateByUrl('dashboard');
      });
  }
}
