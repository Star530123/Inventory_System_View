import { UtilService } from './../../../service/util.service';
import { ManuListRes } from 'src/app/model/common/manu-list/ManuListRes';
import { FormGroup, FormControl } from '@angular/forms';
import { QueryGoodsRes } from './../../../model/goods/query-goods/QueryGoodsRes';
import { GoodsService } from './../../../service/goods.service';
import { CommonService } from './../../../service/common.service';
import { ItemService } from './../../../service/item.service';
import { ItemListRes } from 'src/app/model/common/item-list/ItemListRes';
import { Path } from 'src/app/path';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Item {
  itemSeq: number;
  itemName: string;
}
@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss'],
})
export class GoodsComponent implements OnInit {
  itemKeyword = '';
  isShowResult = false;
  goodsList: QueryGoodsRes[] = [];
  categoryList: ItemListRes[] = [];
  itemList?: Item[] = [];
  manuList: ManuListRes[] = [];
  form = new FormGroup({
    goodsNameLike: new FormControl(),
    categorySeq: new FormControl(),
    itemSeq: new FormControl(),
  });
  constructor(
    private commonService: CommonService,
    private router: Router,
    private utilService: UtilService,
    private goodsService: GoodsService
  ) {}

  ngOnInit(): void {
    this.commonService.itemList({}).subscribe((result) => {
      this.categoryList = result;
    });
    this.commonService.manuList({}).subscribe((result) => {
      this.manuList = result;
    });
  }

  inquiry(): void {
    this.goodsService.queryGoods(this.form.value).subscribe((result) => {
      this.isShowResult = true;
      this.goodsList = result;
    });
  }

  onChange(categorySeq: number): void {
    this.itemList = this.categoryList.find(
      (category) => category.categorySeq === Number(categorySeq)
    )?.items;
  }

  getCategoryName(categorySeq: number): string {
    return this.utilService.getCategoryName(this.categoryList, categorySeq);
  }

  getItemName(itemSeq: number): string {
    return this.utilService.getItemName(this.categoryList, itemSeq);
  }

  getManuName(manuSeq: number): string {
    return this.utilService.getManuName(this.manuList, manuSeq);
  }

  delete(goodsSeq: number): void {
    this.goodsService.deleteGoods({ goodsSeq }).subscribe((result) => {
      if (result.isSuccess) {
        alert('????????????!');
        this.inquiry();
      }
    });
  }
}
