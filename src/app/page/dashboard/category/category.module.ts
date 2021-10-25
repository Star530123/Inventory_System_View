import { CategoryRoutingModule } from './category-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryComponent } from './category.component';
import { NewCategoryComponent } from './new-category/new-category.component';


@NgModule({
  declarations: [
    CategoryComponent,
    NewCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule
  ]
})
export class CategoryModule { }
