import { UserService } from '../../service/user.service';
import { NewUserReq } from '../../model/category/create-account/NewUserReq';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
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
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  createAccount(): void {
    const newUserReq: NewUserReq = {
      account: this.form.controls.account.value,
      password: this.form.controls.password.value,
      userName: this.form.controls.userName.value,
      email: this.form.controls.email.value,
      userGroup: this.form.controls.userGroup.value
    };
    console.log(newUserReq);
    this.userService
      .newUser(newUserReq)
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
