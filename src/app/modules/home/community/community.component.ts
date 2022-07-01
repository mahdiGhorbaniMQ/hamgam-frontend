import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  constructor() { }

  users!:{
    name:string,
    family:string,
    image:string,
    username:string
  }[]

  ngOnInit(): void {
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
  reload(el:ElementRef){
    el.nativeElement.classList.add("rotate")
    setTimeout(() => {
      el.nativeElement.classList.remove("rotate")
    }, 600);
  }
}
