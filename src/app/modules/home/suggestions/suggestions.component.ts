import { Time } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { IdeaModel } from 'src/app/core/models/idea-model';
import { UserModel } from 'src/app/core/models/user-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { IdeaService } from 'src/app/core/services/idea.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  userInfo!:UserModel
  ideas!:IdeaModel[]

  constructor(
    private ideaService:IdeaService,
    private auth:AuthService
  ) { }

  ngOnInit(): void {
    this.userInfo = this.auth.userInfo
    this.ideas = this.ideaService.allIdeas.filter(idea=>this.has(idea.skills,this.userInfo.skills))
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
