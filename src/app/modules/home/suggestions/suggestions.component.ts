import { Time } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { IdeaModel } from 'src/app/core/models/idea-model';
import { UserModel } from 'src/app/core/models/user-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { IdeaService } from 'src/app/core/services/idea.service';
import { InformationService } from 'src/app/core/services/information.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  userInfo!:UserModel
  ideas:IdeaModel[] = []

  constructor(
    private ideaService:IdeaService,
    public informations:InformationService,
    private auth:AuthService,
    public theme:ThemeService
  ) { }

  ngOnInit(): void {
    this.userInfo = this.auth.userInfo
    this.fill()
  }

  fill(){
    this.ideas = []
    this.informations.ideas.forEach((idea,id)=>{
      if(this.has(idea.skills||[],this.auth.userInfo.skills||[])){
        this.ideas.push(idea)
      }
    })
    this.ideas.sort((a,b) => (a.id! <b.id!)?1:-1)

    if(this.ideas.length==0){
      setTimeout(() => {
        this.fill()
      }, 1500);
    }
  }
  
  reload(el:ElementRef){
    el.nativeElement.classList.add("rotate")
    setTimeout(() => {
      el.nativeElement.classList.remove("rotate")
    }, 600);
  }


  has(arr1:any[],arr2:any[]):boolean{
    let res = false
    arr2.forEach(item=>{
      if(arr1.includes(item)) res = true
    })
    return res
  }
}
