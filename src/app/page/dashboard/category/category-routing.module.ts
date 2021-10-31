import { UpdateCategoryComponent } from './update-category/update-category.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'newCategory', component: NewCategoryComponent },
  { path: 'updateCategory', component: UpdateCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
