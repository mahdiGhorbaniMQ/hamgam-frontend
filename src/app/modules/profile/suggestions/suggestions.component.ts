import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {


  users!:{
    name:string,
    family:string,
    image:string,
    username:string
  }[]

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        name:"Sara",
        family:"Starck",
        image:"../../../../assets/profile.jpeg",
        username:"sara_123"
      },
      {
        name:"Kate",
        family:"Lingard",
        image:"../../../../assets/profile3.jpg",
        username:"hello1010"
      },
      {
        name:"Jon",
        family:"Doe",
        image:"../../../../assets/profile2.jpg",
        username:"JonDoeJon"
      }
    ]
  }


}
