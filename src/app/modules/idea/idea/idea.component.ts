import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { IdeaModel } from 'src/app/core/models/idea-model';
import { UserModel } from 'src/app/core/models/user-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { IdeaService } from 'src/app/core/services/idea.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {

  constructor(
    private navInfo:NavInformationService,
    private auth:AuthService,
    private ideaService:IdeaService,
    public theme:ThemeService,
    private route:ActivatedRoute
  ) { }

  idea!:IdeaModel
  isLiked!:boolean
  id!:string
  userInfo!:UserModel
  
  ngOnInit(): void {
    this.navInfo.select(0)
    this.userInfo = this.auth.userInfo
    this.id = this.route.snapshot.paramMap.get("id")!
    this.idea = this.ideaService.getById(this.id)
    this.isLiked = this.idea.likes.includes(this.userInfo)
  }

  like(){
    let index = this.idea.likes.indexOf(this.userInfo)
    if(index>-1){
      this.idea.likes = [...this.idea.likes.slice(0,index),...this.idea.likes.slice((index+1),(this.idea.likes.length-index))]
      this.isLiked = false
    }
    else{
      this.idea.likes.push(this.userInfo)
      this.isLiked = true
    }
    
    this.ideaService.update(this.idea)
  }
}
