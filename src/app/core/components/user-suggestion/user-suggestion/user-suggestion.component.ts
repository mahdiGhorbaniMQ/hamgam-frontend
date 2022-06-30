import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-suggestion',
  templateUrl: './user-suggestion.component.html',
  styleUrls: ['./user-suggestion.component.scss']
})
export class UserSuggestionComponent implements OnInit {

  @Input("user") user!:{
    name:string,
    family:string,
    image:string,
    username:string
  }
  constructor() { }

  ngOnInit(): void {
  }

}
