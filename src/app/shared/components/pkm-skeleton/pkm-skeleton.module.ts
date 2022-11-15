import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PkmSkeletonComponent } from './pkm-skeleton.component';



@NgModule({
  declarations: [
    PkmSkeletonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PkmSkeletonComponent
  ]
})
export class PkmSkeletonModule { }
