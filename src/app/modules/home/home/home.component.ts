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
        name:"مهدی",
        family:"قربانی",
        username:"MahdiGhorbaniMQ",
        profileImage:"../../../../assets/profile.jpg",
        time:{minutes:40,hours:17},
        content:"سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!!",
        likes:150,
        comments:80,
        reTweets:24,
        dir:"rtl"
      },
      {
        name:"مهدی",
        family:"قربانی",
        username:"MahdiGhorbaniMQ",
        profileImage:"../../../../assets/profile.jpg",
        time:{minutes:40,hours:17},
        content:"سلام به همگی این اولین ایده‌ی من هستش!!",
        likes:150,
        comments:80,
        reTweets:24,
        dir:"rtl"
      },
      {
        name:"مهدی",
        family:"قربانی",
        username:"MahdiGhorbaniMQ",
        profileImage:"../../../../assets/profile.jpg",
        time:{minutes:40,hours:17},
        content:"سلام به همگی این اولین ایده‌ی من هستش!!",
        likes:150,
        comments:80,
        reTweets:24,
        dir:"rtl"
      },
      {
        name:"مهدی",
        family:"قربانی",
        username:"MahdiGhorbaniMQ",
        profileImage:"../../../../assets/profile.jpg",
        time:{minutes:40,hours:17},
        content:"سلام به همگی این اولین ایده‌ی من هستش!!",
        likes:150,
        comments:80,
        reTweets:24,
        dir:"rtl"
      },
      {
        name:"مهدی",
        family:"قربانی",
        username:"MahdiGhorbaniMQ",
        profileImage:"../../../../assets/profile.jpg",
        time:{minutes:40,hours:17},
        content:"سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!!",
        likes:150,
        comments:80,
        reTweets:24,
        dir:"rtl"
      },
      {
        name:"مهدی",
        family:"قربانی",
        username:"MahdiGhorbaniMQ",
        profileImage:"../../../../assets/profile.jpg",
        time:{minutes:40,hours:17},
        content:"سلام به همگی این اولین ایده‌ی من هستش!!",
        likes:150,
        comments:80,
        reTweets:24,
        dir:"rtl"
      },
      {
        name:"مهدی",
        family:"قربانی",
        username:"MahdiGhorbaniMQ",
        profileImage:"../../../../assets/profile.jpg",
        time:{minutes:40,hours:17},
        content:"سلام به همگی این اولین ایده‌ی من هستش!!",
        likes:150,
        comments:80,
        reTweets:24,
        dir:"rtl"
      },
      {
        name:"مهدی",
        family:"قربانی",
        username:"MahdiGhorbaniMQ",
        profileImage:"../../../../assets/profile.jpg",
        time:{minutes:40,hours:17},
        content:"سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!!",
        likes:150,
        comments:80,
        reTweets:24,
        dir:"rtl"
      },
      {
        name:"مهدی",
        family:"قربانی",
        username:"MahdiGhorbaniMQ",
        profileImage:"../../../../assets/profile.jpg",
        time:{minutes:40,hours:17},
        content:"سلام به همگی این اولین ایده‌ی من هستش!!",
        likes:150,
        comments:80,
        reTweets:24,
        dir:"rtl"
      },
      {
        name:"مهدی",
        family:"قربانی",
        username:"MahdiGhorbaniMQ",
        profileImage:"../../../../assets/profile.jpg",
        time:{minutes:40,hours:17},
        content:"سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!! سلام به همگی این اولین ایده‌ی من هستش!!",
        likes:150,
        comments:80,
        reTweets:24,
        dir:"rtl"
      },
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
