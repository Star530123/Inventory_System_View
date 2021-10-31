import { UpdateCategoryReq } from './../../../../model/category/update-category/UpdateCategoryReq';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoryListRes } from '../../../../model/common/category-list/CategoryListRes';
import { CategoryService } from './../../../../service/category.service';

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
