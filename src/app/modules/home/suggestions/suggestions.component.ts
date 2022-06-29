import { Time } from '@angular/common';
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
  constructor() { }

  ngOnInit(): void {

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
