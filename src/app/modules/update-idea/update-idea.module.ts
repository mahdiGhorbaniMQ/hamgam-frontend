import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateIdeaComponent } from './update-idea/update-idea.component';
import { CreateIdeaRoutingModule } from '../create-idea/create-idea-routing.module';
import { AngularMaterialModule } from 'src/app/core/share/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserSuggestionModule } from 'src/app/core/components/user-suggestion/user-suggestion.module';
import { SkillsStepComponent } from './skills-step/skills-step.component';
import { SubscribersStepComponent } from './subscribers-step/subscribers-step.component';
import { ContentStepComponent } from './content-step/content-step.component';
import { UpdateProfileComponent } from '../update-profile/update-profile/update-profile.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [
    UpdateIdeaComponent,
    SkillsStepComponent,
    SubscribersStepComponent,
    ContentStepComponent
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
    UpdateIdeaComponent
  ]
})
export class UpdateIdeaModule { }
