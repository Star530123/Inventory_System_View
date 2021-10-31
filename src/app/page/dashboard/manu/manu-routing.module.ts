import { NewManuComponent } from './new-manu/new-manu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManuComponent } from './manu.component';

const routes: Routes = [
  { path: '', component: ManuComponent },
  { path: 'newManu', component: NewManuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManuRoutingModule {}
