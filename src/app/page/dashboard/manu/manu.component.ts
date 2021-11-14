import { ManuService } from './../../../service/manu.service';
import { CommonService } from './../../../service/common.service';
import { Component, OnInit } from '@angular/core';
import { ManuListRes } from 'src/app/model/common/manu-list/ManuListRes';

@Component({
  selector: 'app-manu',
  templateUrl: './manu.component.html',
  styleUrls: ['./manu.component.scss'],
})
export class ManuComponent implements OnInit {
  manuKeyword = '';
  isShowResult = false;
  manuList: ManuListRes[] = [];
  constructor(
    private commonService: CommonService,
    private manuService: ManuService
  ) {}

  ngOnInit(): void {}

  inquiry(): void {
    this.isShowResult = true;
    this.commonService.manuList({}).subscribe((result) => {
      this.manuList = result
        .filter((manu) => manu.manuName.indexOf(this.manuKeyword) !== -1)
        .sort((a, b) => a.manuSeq - b.manuSeq);
    });
  }

  delete(manuSeq: number): void {
    this.manuService.deleteManu({ manuSeq }).subscribe((result) => {
      if (result.isSuccess) {
        alert('刪除成功!');
        this.inquiry();
      }
    });
  }
}
