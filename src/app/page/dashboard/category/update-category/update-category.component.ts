import { CategoryListRes } from './../../../../model/category-list/CategoryListRes';
import { UpdateCategoryReq } from './../../../../model/category/UpdateCategoryReq';
import { CategoryService } from './../../../../service/category.service';
import { CategoryListReq } from './../../../../model/category-list/CategoryListReq';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
})
export class UpdateCategoryComponent implements OnInit {
  newCategory!: UpdateCategoryReq;
  oldCategory!: CategoryListRes;
  constructor(
    private location: Location,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.oldCategory = history.state.category;
    this.newCategory = {
      categorySeq: this.oldCategory.categorySeq,
      categoryName: '',
    };
  }

  updateCategory(): void {
    this.categoryService
      .updateCategory(this.newCategory)
      .subscribe((result) => {
        if (result.categorySeq) {
          alert('成功更新!');
        }
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }
}
