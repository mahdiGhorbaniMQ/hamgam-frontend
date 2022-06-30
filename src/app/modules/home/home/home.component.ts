import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { ScreenService } from 'src/app/core/services/screen.service';

@Component({
  selector: 'app-profile',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ideas!: {
    name:string
    family:string
    username:string
    profileImage:string
    images?:string[]
    time:Time
    content:string
    likes:number
    comments:number
    reTweets:number
    dir?:"rtl"|"ltr"
  }[]

  scroll=0
  selected="ideas"

  constructor(
    private navInfo:NavInformationService,
    public screen:ScreenService) {}

  ngOnInit(): void {
    this.navInfo.select(0)
    this.navInfo.informations.map(item=>{
      if(item.title == "Home") item.isSelected = true
      else { item.isSelected = false}
    })

    this.ideas = [
      {
        name:"mahdi",
        family:"ghorbani",
        username:"MahdiGhorbaniMQ",
        profileImage:"../../../../assets/profile.jpg",
        time:{minutes:40,hours:17},
        content:"Hello world this is my first Tweet!!",
        likes:150,
        comments:80,
        reTweets:24,
      },
      {
        name:"mahdi",
        family:"ghorbani",
        username:"MahdiGhorbaniMQ",
        profileImage:"../../../../assets/profile.jpg",
        time:{minutes:20,hours:20},
        dir:"rtl",
        content:"مقداری کلمه مقداری کلمه مقداری کلمه مقداری کلمه مقداری کلمه مقداری کلمه مقداری کلمه مقداری کلمه مقداری کلمه مقداری کلمه مقداری کلمه مقداری کلمه مقداری کلمه مقداری کلمه مقداری کلمه مقداری کلمه",
        // images:["../../../../assets/profile3.jpg","../../../../assets/profile.jpeg","../../../../assets/profile.jpg","../../../../assets/profile2.jpg"],
        likes:408,
        comments:203,
        reTweets:38,
      },
      {
        name:"mahdi",
        family:"ghorbani",
        username:"MahdiGhorbaniMQ",
        profileImage:"../../../../assets/profile.jpg",
        time:{minutes:20,hours:20},
        content:"Some words, Some words, Some words, Some words, Some words, Some words, Some words, Some words, Some words, Some words, Some words, Some words,Some words!!",
        likes:667,
        comments:329,
        reTweets:49,
      },
      {
        name:"mahdi",
        family:"ghorbani",
        username:"MahdiGhorbaniMQ",
        profileImage:"../../../../assets/profile.jpg",
        time:{minutes:40,hours:17},
        content:"Hello world this is my first Tweet!!",
        likes:150,
        comments:80,
        reTweets:24,
      },
      {
        name:"mahdi",
        family:"ghorbani",
        username:"MahdiGhorbaniMQ",
        profileImage:"../../../../assets/profile.jpg",
        time:{minutes:20,hours:20},
        content:"Some words, Some words, Some words, Some words, Some words, Some words, Some words, Some words, Some words, Some words, Some words, Some words,Some words!!",
        likes:408,
        comments:203,
        reTweets:38,
      },
      {
        name:"mahdi",
        family:"ghorbani",
        username:"MahdiGhorbaniMQ",
        profileImage:"../../../../assets/profile.jpg",
        time:{minutes:20,hours:20},
        content:"Some words, Some words, Some words, Some words, Some words, Some words, Some words, Some words, Some words, Some words, Some words, Some words,Some words!!",
        // images:["../../../../assets/profile3.jpg","../../../../assets/profile.jpeg","../../../../assets/profile.jpg","../../../../assets/profile2.jpg"],
        likes:667,
        comments:329,
        reTweets:49,
      }
    ]
  }

  onscroll(e:any,scrollTop:number){
    this.scroll = scrollTop
  }

  selectTab(tab:string){
    this.selected = tab
    let tmp = [...this.ideas]
    this.ideas = []
    setTimeout(() => {
      this.ideas = [...tmp]
    }, 600);
  }

}
