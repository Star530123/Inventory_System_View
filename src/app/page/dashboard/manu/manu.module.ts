import { ManuComponent } from './manu.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManuRoutingModule } from './manu-routing.module';
import { NewManuComponent } from './new-manu/new-manu.component';


@NgModule({
  declarations: [
    ManuComponent,
    NewManuComponent
  ],
  imports: [
    CommonModule,
    ManuRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManuModule { }
