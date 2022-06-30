import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { CommunityComponent } from './community/community.component';
import { AngularMaterialModule } from 'src/app/core/share/angular-material/angular-material.module';
import { UserSuggestionModule } from 'src/app/core/components/user-suggestion/user-suggestion.module';


@NgModule({
  declarations: [
    CommunityComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule,
    AngularMaterialModule,
    UserSuggestionModule
  ],
  exports:[
    CommunityComponent
  ]
})
export class CommunityModule { }
