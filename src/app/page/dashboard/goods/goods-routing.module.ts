import { NewGoodsComponent } from './new-goods/new-goods.component';
import { GoodsComponent } from './goods.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodsModule } from './goods.module';

const routes: Routes = [
  { path: '', component: GoodsComponent },
  { path: 'newGoods', component: NewGoodsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodsRoutingModule {}
