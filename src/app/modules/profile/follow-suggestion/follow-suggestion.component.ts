import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow-suggestion',
  templateUrl: './follow-suggestion.component.html',
  styleUrls: ['./follow-suggestion.component.scss']
})
export class FollowSuggestionComponent implements OnInit {

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
