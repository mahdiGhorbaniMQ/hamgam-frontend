import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/models/user-model';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-user-suggestion',
  templateUrl: './user-suggestion.component.html',
  styleUrls: ['./user-suggestion.component.scss']
})
export class UserSuggestionComponent implements OnInit {

  @Input("user") user!:UserModel
  constructor(
    public theme:ThemeService,
  ) { }

  ngOnInit(): void {
  }

}
