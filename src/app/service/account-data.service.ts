import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  account = '';
  userName = '';
  constructor() { }
}
