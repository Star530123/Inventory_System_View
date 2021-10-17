import { CreateAccountReq } from './../../model/request/CreateAccountReq';
import { CreateAccountService } from './../../service/create-account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.sass'],
})
export class CreateAccountComponent implements OnInit {
  form: FormGroup = new FormGroup({
    account: new FormControl(),
    password: new FormControl(),
    userName: new FormControl(),
    email: new FormControl(),
    userGroup: new FormControl(),
  });
  constructor(
    private router: Router,
    private createAccountService: CreateAccountService
  ) {}

  ngOnInit(): void {}

  createAccount(): void {
    const newAccountReq: CreateAccountReq = {
      account: this.form.controls.account.value,
      password: this.form.controls.password.value,
      userName: this.form.controls.userName.value,
      email: this.form.controls.email.value,
      userGroup: this.form.controls.userGroup.value
    };
    console.log(newAccountReq);
    this.createAccountService
      .newUser(newAccountReq)
      .subscribe((result) => {
        if (!result.success) {
          alert('新增帳號錯誤，請重新試一次');
          return;
        }
        alert('成功新增帳號，請回登入頁登入');
        this.backToLoginPage();
      });
  }

  backToLoginPage(): void {
    this.router.navigateByUrl('login');
  }
}
