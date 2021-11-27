import { UpdateItemComponent } from './update-item/update-item.component';
import { NewItemComponent } from './new-item/new-item.component';
import { ItemComponent } from './item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ItemComponent },
  { path: 'newItem', component: NewItemComponent },
  { path: 'updateItem', component: UpdateItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemRoutingModule {}
