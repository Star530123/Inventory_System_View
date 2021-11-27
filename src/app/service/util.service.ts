import { ManuListRes } from 'src/app/model/common/manu-list/ManuListRes';
import { ItemListRes } from 'src/app/model/common/item-list/ItemListRes';
import { Injectable } from '@angular/core';

interface Item {
  itemSeq: number;
  itemName: string;
}

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  getCategoryName(categoryList: ItemListRes[], categorySeq: number): string {
    return (
      categoryList.find(
        (category) => category.categorySeq === Number(categorySeq)
      )?.categoryName || String(categorySeq)
    );
  }

  getItemName(categoryList: ItemListRes[], itemSeq: number): string {
    return (
      categoryList
        .map((category) => category.items)
        .reduce((pre, cur) => pre.concat(cur), [])
        .find((item) => item.itemSeq === Number(itemSeq))?.itemName ||
      String(itemSeq)
    );
  }

  getManuName(manuList: ManuListRes[], manuSeq: number): string {
    return (
      manuList.find((manu) => manu.manuSeq === Number(manuSeq))?.manuName ||
      String(manuSeq)
    );
  }
}
