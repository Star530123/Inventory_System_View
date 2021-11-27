import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsRoutingModule } from './goods-routing.module';
import { GoodsComponent } from './goods.component';



@NgModule({
  declarations: [
    GoodsComponent
  ],
  imports: [
    CommonModule,
    GoodsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GoodsModule { }
