import { Component, OnInit } from '@angular/core';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {

  constructor(private navInfo:NavInformationService) { }
  users!:{
    name:string,
    family:string,
    image:string,
    username:string
  }[]
  isLiked!:boolean
  ngOnInit(): void {
    this.navInfo.select(0)
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
  longText = `این یک متن طولانی است این یک متن طولانی است
  این یک متن طولانی است این یک متن طولانی است
  این یک متن طولانی است این یک متن طولانی است
  این یک متن طولانی است این یک متن طولانی است
  این یک متن طولانی است این یک متن طولانی است
  این یک متن طولانی است این یک متن طولانی است
  این یک متن طولانی است این یک متن طولانی است
  این یک متن طولانی است این یک متن طولانی است
  این یک متن طولانی است این یک متن طولانی است
  این یک متن طولانی است این یک متن طولانی است
  ین یک متن طولانی است این یک متن طولانی است
  این یک متن طولانی است این یک متن طولانی است
  این یک متن طولانی است این یک متن طولانی است
  این یک متن طولانی است این یک متن طولانی است`;

}
