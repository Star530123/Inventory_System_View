import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';
import { NewItemComponent } from './new-item/new-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';



@NgModule({
  declarations: [
    ItemComponent,
    NewItemComponent,
    UpdateItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ItemRoutingModule
  ]
})
export class ItemModule { }
