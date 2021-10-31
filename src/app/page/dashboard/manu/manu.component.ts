import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manu',
  templateUrl: './manu.component.html',
  styleUrls: ['./manu.component.scss'],
})
export class ManuComponent implements OnInit {
  manuKeyword = '';
  isShowResult = false;
  categoryList = [];
  constructor() {}

  ngOnInit(): void {}

  inquiry(): void {}

  delete(manuSeq: number): void {

  }
}
