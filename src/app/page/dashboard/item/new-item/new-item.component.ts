import { ItemService } from './../../../../service/item.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoryListRes } from './../../../../model/common/category-list/CategoryListRes';
import { CommonService } from './../../../../service/common.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
})
export class NewItemComponent implements OnInit {
  categoryList: CategoryListRes[] = [];
  form = new FormGroup({
    categorySeq: new FormControl(),
    itemName: new FormControl(),
  });
  constructor(
    private location: Location,
    private commonService: CommonService,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.commonService.categoryList({}).subscribe((result) => {
      this.categoryList = result;
    });
  }

  addItem(): void {
    this.itemService.newItem(this.form.value).subscribe((result) => {
      if (result.itemSeq) {
        alert('新增成功!');
        this.location.back();
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
