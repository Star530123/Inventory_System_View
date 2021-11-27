import { ItemService } from './../../../service/item.service';
import { Path } from 'src/app/path';
import { CommonService } from './../../../service/common.service';
import { Component, OnInit } from '@angular/core';
import { ItemListRes } from 'src/app/model/common/item-list/ItemListRes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  itemKeyword = '';
  isShowResult = false;
  itemList: ItemListRes[] = [];
  constructor(
    private commonService: CommonService,
    private router: Router,
    private itemService: ItemService
  ) {}

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

  update(category: ItemListRes, item: any): void {
    this.router.navigate([Path.updateItem], {
      state: {
        item,
        categorySeq: category.categorySeq,
        categoryName: category.categoryName,
      },
    });
  }

  delete(itemSeq: number): void {
    this.itemService.deleteItem({ itemSeq }).subscribe((result) => {
      if (result.isSuccess) {
        alert('刪除成功!');
        this.inquiry();
      }
    });
  }
}
