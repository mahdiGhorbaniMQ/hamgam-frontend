import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSkillFormComponent } from './add-skill-form/add-skill-form.component';
import { AngularMaterialModule } from '../../share/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddSkillFormComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ]
})
export class AddSkillFormModule { }
