import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSuggestionComponent } from './user-suggestion/user-suggestion.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../share/angular-material/angular-material.module';



@NgModule({
  declarations: [UserSuggestionComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule
  ],
  exports:[
    UserSuggestionComponent
  ]
})
export class UserSuggestionModule { }
