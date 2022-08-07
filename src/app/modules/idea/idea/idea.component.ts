import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { IdeaModel } from 'src/app/core/models/idea-model';
import { UserModel } from 'src/app/core/models/user-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { IdeaService } from 'src/app/core/services/idea.service';
import { InformationService } from 'src/app/core/services/information.service';
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
    public informations:InformationService,
    public theme:ThemeService,
    private route:ActivatedRoute,
    private router:Router,
    private http:HttpClient,
    private rout:ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  idea!:IdeaModel
  isLiked!:boolean
  id!:number
  userInfo!:UserModel
  content:any = ""

  @ViewChild('commentInut') commentInut!:ElementRef

  comment = new FormControl('', [Validators.required])
  
  ngOnInit(): void {
    this.navInfo.select(0)
    this.userInfo = this.auth.userInfo
    this.id = Number.parseInt(this.route.snapshot.paramMap.get("id")!)
    if(!this.informations.ideas.has(this.id)){
      this.informations.ideas.set(this.id,{})
    }
    this.idea = this.informations.ideas.get(this.id)!
    if(this.idea.content)
    this.content = this.sanitizer.bypassSecurityTrustHtml(this.idea.content)!;
    if(this.idea.likes)
    this.isLiked = this.idea.likes.includes(this.userInfo)    
    setTimeout(() => {      
      if(this.idea.content)
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.idea.content!)!;
      if(this.idea.likes)
      this.isLiked = this.idea.likes.includes(this.userInfo)
    }, 500);
    setTimeout(() => {
      if(this.idea.content)
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.idea.content!)!;
      if(this.idea.likes)
      this.isLiked = this.idea.likes.includes(this.userInfo)
    }, 1500);
    setTimeout(() => {
      if(this.idea.content)
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.idea.content!)!;      
      if(this.idea.likes)
      this.isLiked = this.idea.likes.includes(this.userInfo)
    }, 3500);
    setTimeout(() => {
      if(this.idea.content)
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.idea.content)!;
      if(this.idea.likes)
      this.isLiked = this.idea.likes.includes(this.userInfo)
    }, 4500);
    setTimeout(() => {
      if(this.idea.content)
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.idea.content)!;
      if(this.idea.likes)
      this.isLiked = this.idea.likes.includes(this.userInfo)
    }, 6500);
  }
  ngAfterViewInit(){
    if(this.rout.snapshot.paramMap.has("comments"))
      this.commentInut.nativeElement.scrollIntoView()
  }

  async like(){
    let isAuthenticated
    this.auth.isAuthenticated.subscribe(authenticated=>isAuthenticated = authenticated)
    if(!isAuthenticated){
      this.router.navigate(['login'])
      return
    }
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
  
  send(){
    let isAuthenticated
    this.auth.isAuthenticated.subscribe(authenticated=>isAuthenticated = authenticated)
    
    if(!isAuthenticated){
      this.router.navigate(['login'])
      return
    }
    let body = {
      publish:new Date(),
      title:"title",
      content:this.comment.value,
      status:true,
      commentor:this.auth.userInfo.id,
      idea:this.idea.id,
    }    
    this.http.post("/api/ideas/comments/create",body).subscribe(res=>{
      this.idea.comments?.push(this.ideaService.parseComment(res,this.idea))
      this.comment.reset()
    })
  }
  getCommentError() {
    if (this.comment.hasError('required')) {
      return 'این فیلد ضروری است';
    }
    return '';
  }
}
