import { CommonService } from './../../../service/common.service';
import { Component, OnInit } from '@angular/core';
import { ItemListRes } from 'src/app/model/common/item-list/ItemListRes';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  itemKeyword = '';
  isShowResult = false;
  itemList: ItemListRes[] = [];
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {}
  inquiry(): void {
    this.commonService.itemList({}).subscribe((result) => {
      this.isShowResult = true;
      this.itemList = result;
      this.itemList.forEach((category) => {
        category.items = category.items.filter(
          (item) => item.itemName.indexOf(this.itemKeyword) !== -1
        );
      });
    });
  }

  update(): void {}
  delete(): void {}
}
