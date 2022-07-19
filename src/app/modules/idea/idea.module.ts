import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeaRoutingModule } from './idea-routing.module';
import { IdeaComponent } from './idea/idea.component';
import { AngularMaterialModule } from 'src/app/core/share/angular-material/angular-material.module';
import { UserSuggestionModule } from 'src/app/core/components/user-suggestion/user-suggestion.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    IdeaComponent
  ],
  imports: [
    CommonModule,
    IdeaRoutingModule,
    AngularMaterialModule,
    UserSuggestionModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    IdeaComponent
  ]
})
export class IdeaModule { }
