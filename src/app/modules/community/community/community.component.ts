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
        name:"سارا",
        family:"استارک",
        image:"../../../../assets/profile2.jpg",
        username:"sara_123"
      },
      {
        name:"کتی",
        family:"لینگارد",
        image:"../../../../assets/profile2.jpg",
        username:"hello1010"
      },
      {
        name:"جان",
        family:"دو",
        image:"../../../../assets/profile2.jpg",
        username:"JonDoeJon"
      },
      {
        name:"سارا",
        family:"استارک",
        image:"../../../../assets/profile2.jpg",
        username:"sara_123"
      },
      {
        name:"کتی",
        family:"لینگارد",
        image:"../../../../assets/profile2.jpg",
        username:"hello1010"
      },
      {
        name:"جان",
        family:"دو",
        image:"../../../../assets/profile2.jpg",
        username:"JonDoeJon"
      },
      {
        name:"سارا",
        family:"استارک",
        image:"../../../../assets/profile2.jpg",
        username:"sara_123"
      },
      {
        name:"کتی",
        family:"لینگارد",
        image:"../../../../assets/profile2.jpg",
        username:"hello1010"
      },
      {
        name:"جان",
        family:"دو",
        image:"../../../../assets/profile2.jpg",
        username:"JonDoeJon"
      },
    ]
  }
}
