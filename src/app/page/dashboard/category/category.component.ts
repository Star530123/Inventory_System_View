import { Router } from '@angular/router';
import { CategoryListRes } from './../../../model/category-list/CategoryListRes';
import { CommonService } from './../../../service/common.service';
import { Component, OnInit } from '@angular/core';
import { Path } from 'src/app/path';

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
  constructor(private commonService: CommonService, private router: Router) {}

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

  update(category: CategoryListRes): void {
    this.router.navigate([Path.updateCategory], { state: { category } });
  }
}
