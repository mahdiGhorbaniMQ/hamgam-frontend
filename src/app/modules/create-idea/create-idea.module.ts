import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateIdeaRoutingModule } from './create-idea-routing.module';
import { CreateIdeaComponent } from './create-idea/create-idea.component';


@NgModule({
  declarations: [
    CreateIdeaComponent
  ],
  imports: [
    CommonModule,
    CreateIdeaRoutingModule
  ],
  exports:[
    CreateIdeaComponent
  ]
})
export class CreateIdeaModule { }
