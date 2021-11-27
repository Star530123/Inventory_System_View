import { CommonService } from './../../../../service/common.service';
import { NewGoodsReq } from './../../../../model/goods/new-goods/NewGoodsReq';
import { GoodsService } from './../../../../service/goods.service';
import { ManuListRes } from 'src/app/model/common/manu-list/ManuListRes';
import { ItemListRes } from 'src/app/model/common/item-list/ItemListRes';
import { UtilService } from './../../../../service/util.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

interface Item {
  itemSeq: number;
  itemName: string;
}

@Component({
  selector: 'app-new-goods',
  templateUrl: './new-goods.component.html',
  styleUrls: ['./new-goods.component.scss'],
})
export class NewGoodsComponent implements OnInit {
  goodsName = '';
  totalAmount = 0;
  twdTotal = 0;
  curTotal = 0;
  categoryList: ItemListRes[] = [];
  itemList?: Item[] = [];
  manuList: ManuListRes[] = [];
  manu?: ManuListRes;
  form = new FormGroup({
    feature: new FormControl(),
    size: new FormControl(),
    itemSeq: new FormControl(),
    manuSeq: new FormControl(),
    perQuantity: new FormControl(),
    amount: new FormControl(),
    twdUnitPrice: new FormControl(),
    currencyUnitPrice: new FormControl(),
    purchaseTime: new FormControl(),
    tariff: new FormControl(),
    shippingFee: new FormControl(),
  });
  constructor(
    private utilService: UtilService,
    private goodsService: GoodsService,
    private commonService: CommonService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.commonService.itemList({}).subscribe((result) => {
      this.categoryList = result;
    });
    this.commonService.manuList({}).subscribe((result) => {
      this.manuList = result;
    });
  }

  newGoods(): void {
    const req: NewGoodsReq = this.form.value;
    console.log(req);
    this.goodsService.newGoods(req).subscribe((result) => {
      if (result.goodSeq) {
        alert('新增成功!');
        this.location.back();
      }
    });
  }

  goBack(): void {
    this.location.back();
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

  categoryOnChange(event: any): void {
    const categorySeq = event.target.value;
    this.itemList = this.categoryList.find(
      (category) => category.categorySeq === Number(categorySeq)
    )?.items;
  }

  goodsNameOnChange(): void {
    const val = this.form.value;
    if (val.feature && val.size && val.itemSeq) {
      this.goodsName = `${this.getItemName(val.itemSeq)} ${val.feature} ${val.size}`;
    }
  }

  manuOnChange(manuSeq: number): void {
    this.manu = this.manuList.find((manu) => manu.manuSeq === Number(manuSeq));
  }

  checkCurrency(): boolean {
    if (!this.manu) { return false; }
    const cur = this.manu.currency.toLowerCase();
    return cur !== 'twd';
  }

  amountOnChange(): void {
    const val = this.form.value;
    if (val.perQuantity && val.amount) {
      this.totalAmount = Number(Number(val.perQuantity) * Number(val.amount));
    }else {
      this.totalAmount = 0;
    }
  }

  twdOnChange(): void {
    const val = this.form.value;
    if (val.twdUnitPrice) {
      this.twdTotal = Number(Number(val.twdUnitPrice) * Number(this.totalAmount));
    }else {
      this.twdTotal = 0;
    }
  }

  curOnChange(): void {
    const val = this.form.value;
    if (val.currencyUnitPrice) {
      this.curTotal = Number(Number(val.currencyUnitPrice) * Number(this.totalAmount));
    }else {
      this.curTotal = 0;
    }
  }
}
