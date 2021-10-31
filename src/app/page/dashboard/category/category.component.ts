import { CategoryService } from './../../../service/category.service';
import { Router } from '@angular/router';
import { CategoryListRes } from '../../../model/common/category-list/CategoryListRes';
import { CommonService } from './../../../service/common.service';
import { Component, OnInit } from '@angular/core';
import { Path } from 'src/app/path';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoryList: CategoryListRes[] = [];
  categoryKeyword = '';
  isShowResult = false;
  constructor(
    private commonService: CommonService,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {}

  inquiry(): void {
    this.isShowResult = true;
    this.commonService
      .categoryList({})
      .subscribe(
        (result) =>
          (this.categoryList = result
            .filter(
              (category) =>
                category.categoryName.indexOf(this.categoryKeyword) !== -1
            )
            .sort((a, b) => a.categorySeq - b.categorySeq))
      );
  }

  update(category: CategoryListRes): void {
    this.router.navigate([Path.updateCategory], { state: { category } });
  }

  delete(categorySeq: number): void {
    this.categoryService.deleteCategory({ categorySeq }).subscribe((result) => {
      if (result.isSuccess) {
        alert('刪除成功!');
        this.inquiry();
      }
    });
  }
}
