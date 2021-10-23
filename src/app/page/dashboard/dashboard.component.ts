import { Router } from '@angular/router';
import { AccountDataService } from './../../service/account-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  constructor(
    public accountDataServie: AccountDataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this.accountDataServie.account = '';
    this.accountDataServie.userName = '';
    this.router.navigateByUrl('login');
  }
}
