import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeaRoutingModule } from './idea-routing.module';
import { IdeaComponent } from './idea/idea.component';
import { AngularMaterialModule } from 'src/app/core/share/angular-material/angular-material.module';
import { UserSuggestionModule } from 'src/app/core/components/user-suggestion/user-suggestion.module';


@NgModule({
  declarations: [
    IdeaComponent
  ],
  imports: [
    CommonModule,
    IdeaRoutingModule,
    AngularMaterialModule,
    UserSuggestionModule
  ],
  exports:[
    IdeaComponent
  ]
})
export class IdeaModule { }
