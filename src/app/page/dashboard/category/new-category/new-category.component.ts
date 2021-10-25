import { CategoryService } from './../../../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss'],
})
export class NewCategoryComponent implements OnInit {
  categoryName!: string;
  constructor(
    private categoryService: CategoryService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  addCategory(): void {
    console.log(this.categoryName);
    if (!this.categoryName) {
      alert('請輸入類別名稱');
      return;
    }
    this.categoryService
      .newCategory({ categoryName: this.categoryName })
      .subscribe((result) => {
        if (!result.categorySeq) {
          return;
        }
        alert('成功新增類別');
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }
}
