import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';



@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ItemRoutingModule
  ]
})
export class ItemModule { }
