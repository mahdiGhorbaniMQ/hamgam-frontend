import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { IdeaModel } from 'src/app/core/models/idea-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { IdeaService } from 'src/app/core/services/idea.service';
import { InformationService } from 'src/app/core/services/information.service';
import { ScreenService } from 'src/app/core/services/screen.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-profile',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ideas:IdeaModel[] = []
  selected="ideas"

  constructor(
    private navInfo:NavInformationService,
    public screen:ScreenService,
    public theme:ThemeService,
    private ideaService:IdeaService,
    private informations:InformationService,
    private auth:AuthService,
  ) {}

  ngOnInit(): void {
    this.navInfo.select(0)
    this.fill()    
  }

  fill(){
    this.ideas = []
    this.informations.ideas.forEach((value,key)=>{
      this.ideas.push(value)
    })
    this.ideas.sort((a,b) => (a.id! <b.id!)?1:-1)
    if (this.ideas.length == 0)
    setTimeout(() => {
        this.fill()
    }, 1500);
  }


  selectTab(tab:string){
    this.selected = tab
    if (tab=="ideas"){
      this.ideas = []
      this.informations.ideas.forEach((value,key)=>{
        this.ideas.push(value)
      })
      this.ideas.sort((a,b) => (a.date! <b.date!)?1:-1)
    }
    else if(tab=="suggestions"){
      this.ideas = []
      this.informations.ideas.forEach((idea,id)=>{
        if(this.hasItem(idea.skills||[],this.auth.userInfo.skills||[])){
          this.ideas.push(idea)
        }
      })
      this.ideas.sort((a,b) => (a.date! <b.date!)?1:-1)
    }
    else if(tab=="your_ideas")
    this.ideas = []
      this.informations.ideas.forEach((idea,id)=>{
        if(idea.creator == this.auth.userInfo){
          this.ideas.push(idea)
        }
      })
      this.ideas.sort((a,b) => (a.date! <b.date!)?1:-1)
  }

  hasItem(arr1:any[],arr2:any[]):boolean{
    let res = false
    arr1.forEach(item=>{
      arr2.forEach(item2=>{
        if(item == item2){res = true;}
      })
    })
    return res
  }
}
