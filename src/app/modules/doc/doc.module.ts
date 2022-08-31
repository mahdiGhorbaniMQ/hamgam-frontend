import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocComponent } from './doc/doc.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/core/share/angular-material/angular-material.module';



@NgModule({
  declarations: [
    DocComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule
  ],
  exports:[
    DocComponent
  ]
})
export class DocModule { }
