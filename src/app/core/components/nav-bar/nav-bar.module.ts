import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../share/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule
  ],
  exports:[
    NavBarComponent
  ]
})
export class NavBarModule { }
