import { NewItemComponent } from './new-item/new-item.component';
import { ItemComponent } from './item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ItemComponent },
  { path: 'newItem', component: NewItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemRoutingModule {}
