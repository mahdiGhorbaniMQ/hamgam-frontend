import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IdeaComponent } from './idea/idea.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { CommunityComponent } from './community/community.component';
import { AngularMaterialModule } from 'src/app/core/share/angular-material/angular-material.module';
import { IdeaSuggestionComponent } from './idea-suggestion/idea-suggestion.component';
import { RouterModule } from '@angular/router';
import { UserSuggestionModule } from 'src/app/core/components/user-suggestion/user-suggestion.module';


@NgModule({
  declarations: [
    HomeComponent,
    IdeaComponent,
    SuggestionsComponent,
    CommunityComponent,
    IdeaSuggestionComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    UserSuggestionModule
  ],
  exports:[
    HomeComponent,
  ]
})
export class HomeModule { }
