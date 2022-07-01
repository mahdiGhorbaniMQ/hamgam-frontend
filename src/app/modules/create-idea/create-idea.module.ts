import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateIdeaRoutingModule } from './create-idea-routing.module';
import { CreateIdeaComponent } from './create-idea/create-idea.component';
import { AngularMaterialModule } from 'src/app/core/share/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateIdeaComponent
  ],
  imports: [
    CommonModule,
    CreateIdeaRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    CreateIdeaComponent
  ]
})
export class CreateIdeaModule { }
