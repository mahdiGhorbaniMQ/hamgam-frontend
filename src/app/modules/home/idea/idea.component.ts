import { Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ScreenService } from 'src/app/core/services/screen.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {

  isLiked!:boolean

  @Input("idea") idea!:{
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
  }

  constructor(
    public screen:ScreenService,
    private router:Router) { }

  ngOnInit(): void { }

  showIdea(){
    setTimeout(() => {
      this.router.navigate(["/idea",this.idea.username])      
    }, 250);
  }
  
}
