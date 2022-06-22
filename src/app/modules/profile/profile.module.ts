import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { TweetComponent } from './tweet/tweet.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { TrendsComponent } from './trends/trends.component';
import { FollowSuggestionComponent } from './follow-suggestion/follow-suggestion.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { AngularMaterialModule } from 'src/app/core/share/angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ProfileComponent,
    TweetComponent,
    SuggestionsComponent,
    TrendsComponent,
    FollowSuggestionComponent,
    ProfileInfoComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports:[
    ProfileComponent,
  ]
})
export class ProfileModule { }
