import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../share/angular-material/angular-material.module';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule
  ],
  exports:[
    NavBarComponent
  ]
})
export class NavBarModule { }
