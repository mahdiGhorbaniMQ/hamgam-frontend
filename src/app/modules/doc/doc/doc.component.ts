import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { DocModel } from 'src/app/core/models/doc-model';
import { SkillModel } from 'src/app/core/models/skill-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { InformationService } from 'src/app/core/services/information.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss']
})
export class DocComponent implements OnInit {

  docs:DocModel[] = []
  doc!:DocModel
  skill!:SkillModel
  number!:number
  content:any = ""

  constructor(
    private navInfo:NavInformationService,
    public theme:ThemeService,
    private informations:InformationService,
    private route:ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.navInfo.select(0)
    this.route.paramMap.subscribe(paramMap=>{
      this.getDoc(paramMap)
      setTimeout(() => this.getDoc(paramMap), 500);
      setTimeout(() => this.getDoc(paramMap), 1000);
      setTimeout(() => this.getDoc(paramMap), 1500);
      setTimeout(() => this.getDoc(paramMap), 2000);
      setTimeout(() => this.getDoc(paramMap), 2500);
      setTimeout(() => this.getDoc(paramMap), 3000);
    })
  }

  getDoc(paramMap:ParamMap):void{
    this.informations.skills.forEach((skill,id)=>{
      if(skill.name?.toLowerCase() === paramMap.get("skill")?.toLowerCase()){
        this.skill = skill
        this.docs = skill.docs || []
      }
    })
    if(paramMap.has('number')){
      this.number = Number(paramMap.get("number"))
      this.docs.forEach(doc=>{
        if(doc.number === this.number) this.doc = doc
      })
    }
    else{
      this.docs.forEach(doc=>{
        if(doc.number === 1) this.doc = doc
      })
    }
    
    if(this.doc && this.doc.content){
      // this.content = this.sanitizer.bypassSecurityTrustHtml(this.doc.content);
      this.content = this.doc.content;
    }
  }
}
