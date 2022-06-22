import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore/explore.component';



@NgModule({
  declarations: [
    ExploreComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ExploreComponent
  ]
})
export class ExploreModule { }
