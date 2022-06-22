import { Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ScreenService } from 'src/app/core/services/screen.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {

  isLiked!:boolean

  @Input("tweet") tweet!:{
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
  }

  constructor(
    public screen:ScreenService,
    private toaster:MatSnackBar) { }

  ngOnInit(): void { }

  showToastMessage(){
    this.toaster.open("@"+this.tweet.username,"Got it!",{
      duration:1500
    })
  }

}
