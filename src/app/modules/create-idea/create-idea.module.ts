import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateIdeaRoutingModule } from './create-idea-routing.module';
import { CreateIdeaComponent } from './create-idea/create-idea.component';
import { AngularMaterialModule } from 'src/app/core/share/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentStepComponent } from './content-step/content-step.component';
import { SkillsStepComponent } from './skills-step/skills-step.component';
import { SubscribersStepComponent } from './subscribers-step/subscribers-step.component';
import { UserSuggestionModule } from 'src/app/core/components/user-suggestion/user-suggestion.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [
    CreateIdeaComponent,
    ContentStepComponent,
    SkillsStepComponent,
    SubscribersStepComponent,
  ],
  imports: [
    CommonModule,
    CreateIdeaRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    UserSuggestionModule,
    CKEditorModule,
    FormsModule
  ],
  exports:[
    CreateIdeaComponent
  ]
})
export class CreateIdeaModule { }
