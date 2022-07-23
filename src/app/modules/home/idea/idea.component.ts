import { Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IdeaModel } from 'src/app/core/models/idea-model';
import { UserModel } from 'src/app/core/models/user-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { IdeaService } from 'src/app/core/services/idea.service';
import { ScreenService } from 'src/app/core/services/screen.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {

  isLiked!:boolean

  @Input("idea") idea!:IdeaModel
  
  userInfo!:UserModel


  constructor(
    public screen:ScreenService,
    private ideaService:IdeaService,
    public theme:ThemeService,
    private auth:AuthService,
    private router:Router) { }

  ngOnInit(): void {    
    this.userInfo = this.auth.userInfo
    this.isLiked = this.idea.likes!.includes(this.userInfo)    
  }

  showIdea(){
    setTimeout(() => {
      this.router.navigate(["/idea",this.idea.id])      
    }, 250);
  }
  
  async like(){
    let index = this.idea.likes!.indexOf(this.userInfo)
    if(index>-1){
      this.idea.likes = [...this.idea.likes!.slice(0,index),...this.idea.likes!.slice((index+1),(this.idea.likes!.length-index))]
      this.isLiked = false
    }
    else{
      this.idea.likes!.push(this.userInfo)
      this.isLiked = true
    }
    await this.ideaService.update(this.idea)
  }
}
