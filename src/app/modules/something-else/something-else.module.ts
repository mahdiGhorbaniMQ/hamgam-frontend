import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomethingElseComponent } from './something-else/something-else.component';



@NgModule({
  declarations: [
    SomethingElseComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SomethingElseComponent
  ]
})
export class SomethingElseModule { }
