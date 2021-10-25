import { CategoryListRes } from './../../../model/category-list/CategoryListRes';
import { CommonService } from './../../../service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  originCategoryList!: CategoryListRes[];
  categoryList!: CategoryListRes[];
  categoryKeyword = '';
  isShowResult = false;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService
      .categoryList({})
      .subscribe((result) => (this.originCategoryList = result));
  }

  inquiry(): void {
    this.isShowResult = true;
    this.categoryList = this.originCategoryList.filter(
      (category) => category.categoryName.indexOf(this.categoryKeyword) !== -1
    );
  }
}
