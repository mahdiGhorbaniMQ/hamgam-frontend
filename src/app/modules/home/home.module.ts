import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IdeaComponent } from './idea/idea.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { CommunityComponent } from './community/community.component';
import { UserSuggestionComponent } from './user-suggestion/user-suggestion.component';
import { AngularMaterialModule } from 'src/app/core/share/angular-material/angular-material.module';
import { IdeaSuggestionComponent } from './idea-suggestion/idea-suggestion.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    IdeaComponent,
    SuggestionsComponent,
    CommunityComponent,
    UserSuggestionComponent,
    IdeaSuggestionComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
  ]
})
export class HomeModule { }
