import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { AngularMaterialModule } from '../../share/angular-material/angular-material.module';



@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[LoadingComponent]
})
export class LoadingModule { }
