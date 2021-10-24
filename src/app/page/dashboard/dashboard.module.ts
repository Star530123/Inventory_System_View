import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ManuModule } from './manu/manu.module';
import { ItemModule } from './item/item.module';
import { GoodsModule } from './goods/goods.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ManuModule,
    ItemModule,
    GoodsModule
  ]
})
export class DashboardModule { }
