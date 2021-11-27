import { Location } from '@angular/common';
import { CategoryListRes } from './../../../../model/common/category-list/CategoryListRes';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../../../service/common.service';
import { ItemService } from './../../../../service/item.service';

interface Item {
  categorySeq: number;
  categoryName: string;
  item: {
    itemSeq: number;
    itemName: string;
  };
}

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss'],
})
export class UpdateItemComponent implements OnInit {
  oldItem!: Item;
  categoryList: CategoryListRes[] = [];
  itemName = '';

  constructor(
    private location: Location,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.oldItem = history.state;
  }

  updateItem(): void {
    this.itemService
      .updateItem({
        categorySeq: this.oldItem.categorySeq,
        itemSeq: this.oldItem.item.itemSeq,
        itemName: this.itemName
      })
      .subscribe((result) => {
        if (result.itemSeq) {
          alert('更新成功!');
          this.location.back();
        }
      });
  }

  goBack(): void {
    this.location.back();
  }
}
