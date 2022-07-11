import { NgModule } from '@angular/core';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/core/share/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    UpdateProfileComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    UpdateProfileComponent
  ]
})
export class UpdateProfileModule { }
