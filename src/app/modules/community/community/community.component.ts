import { Component, OnInit } from '@angular/core';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  constructor(private navInfo:NavInformationService) { }

  users!:{
    name:string,
    family:string,
    image:string,
    username:string
  }[]

  ngOnInit(): void {
    this.navInfo.select(1)
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
      },
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
      },
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
      },
    ]
  }
}
