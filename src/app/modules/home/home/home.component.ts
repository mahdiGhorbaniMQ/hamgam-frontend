import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { IdeaModel } from 'src/app/core/models/idea-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { IdeaService } from 'src/app/core/services/idea.service';
import { ScreenService } from 'src/app/core/services/screen.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-profile',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ideas!:IdeaModel[]
  selected="ideas"

  constructor(
    private navInfo:NavInformationService,
    public screen:ScreenService,
    public theme:ThemeService,
    private ideaService:IdeaService,
    private auth:AuthService,
  ) {}

  ngOnInit(): void {
    this.navInfo.select(0)
    this.ideas = this.ideaService.allIdeas
  }

  selectTab(tab:string){
    this.selected = tab
    if (tab=="ideas")
      this.ideas = this.ideaService.allIdeas
    else if(tab=="your_requests")
      this.ideas = this.ideaService.allIdeas.filter(idea=>idea.requests.map(req=>req.user).includes(this.auth.userInfo))
    else if(tab=="your_ideas")
      this.ideas = this.ideaService.allIdeas.filter(idea=>idea.creator == this.auth.userInfo)
  }

}
