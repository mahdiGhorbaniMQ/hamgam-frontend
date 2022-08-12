import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocComponent } from './doc/doc.component';



@NgModule({
  declarations: [
    DocComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DocComponent
  ]
})
export class DocModule { }
