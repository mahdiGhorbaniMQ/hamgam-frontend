import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentModel } from '../models/comment-model';
import { IdeaModel } from '../models/idea-model';
import { InformationService } from './information.service';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  constructor(private http:HttpClient,private informations:InformationService) {
    this.fillIdeas()
  }

  fillIdeas(){
    this.http.get("/api/ideas").subscribe(
      (data:any)=>{
        data.forEach(async (item:any) => {
          
          let idea:IdeaModel = {};

          if(this.informations.ideas.has(item.id!)){
            idea = this.informations.ideas.get(item.id)!
          }
          
          idea.id = item.id,
          idea.title = item.title,
          idea.creator = this.parseUser(item.creator),
          idea.skills = [],
          idea.comments = [],
          idea.likes = [],
          idea.subscribers = []

          item.skills.forEach((skill:any) => {
            idea.skills?.push(this.parseSkill(skill))            
          });

          this.informations.ideas.set(idea.id!,idea)           
          
          await this.fillById(idea.id!)

        });
      },
      err=>{setTimeout(() => {
        this.fillIdeas()
      }, 5000);}
    )
  }

  async fillById(id:number):Promise<IdeaModel>{
    return new Promise<IdeaModel>((resolve, reject) => {
      this.http.get("/api/ideas/"+id).subscribe(
        (data:any)=>{
          let idea = this.informations.ideas.get(id)!;
          
          idea.content = data.content
          idea.date = new Date(data.pub_date)

          data.users.forEach((userItem:any) => {
            idea.subscribers?.push(this.parseUser(userItem))
          });

          data.likes.forEach((userItem:any) => {
            idea.likes?.push(this.parseUser(userItem))
          });

          data.comments.forEach((commentItem:any) => {            
            idea.comments?.push(this.parseComment(commentItem))
          });          
        }
      )
    })
  }

  parseUser(userData:any){    
    if(this.informations.users.has(userData.id)){
      let user = this.informations.users.get(userData.id)!
      user!.id = userData.id
      user!.email = userData.email
      user!.img = userData.avatar?userData.avatar:"src/assets/no-prof.jpg"

      if(!user!.firstName)
        user.firstName = ""
      if(!user!.lastName)
        user!.lastName = ""

      return user
    }
    else{
      let user = {
        id: userData.id,
        email: userData.email,
        img: userData.avatar?userData.avatar:"src/assets/no-prof.jpg",
        firstName: "",
        lastName: ""
      }
      this.informations.users.set(user.id!,user)
      return this.informations.users.get(user.id!)!
    }
  }

  parseComment(commentData:any){
    if(this.informations.comments.has(commentData.id)){
      let comment = this.informations.comments.get(commentData.id)!
      comment.id = commentData.id
      comment.date = new Date(commentData.created)
      comment.content = commentData.content
      let commentor = {}
      if(this.informations.users.has(commentData.commentor))
        commentor = this.informations.users.get(commentData.commentor)!
      else 
        this.informations.users.set(commentData.commentor,commentor)!
      comment.user = commentor
      
      return comment
    }
    else{
      let comment:CommentModel = {
        id: commentData.id,
        date: new Date(commentData.created),
        content: commentData.content,
      }
      let commentor = {}
      if(this.informations.users.has(commentData.commentor))
        commentor = this.informations.users.get(commentData.commentor)!
      else 
        this.informations.users.set(commentData.commentor,commentor)!
      comment.user = commentor
      this.informations.comments.set(comment.id!,comment)
      return this.informations.comments.get(comment.id!)!
    }
  }

  parseSkill(skillData:any){

    if(this.informations.skills.has(skillData.id)){
      let skill = this.informations.skills.get(skillData.id)!
      skill.id = skillData.id
      skill.name = skillData.name
      return skill
    }
    else{
      let skill = {
        id: skillData.id,
        name: skillData.name,
      }
      this.informations.skills.set(skill.id!,skill)
      return this.informations.skills.get(skill.id!)!
    }
  }


  async create(idea:IdeaModel):Promise<any>{
    return new Promise<any>((resolve, reject) => {
      let data = {
        title: idea.title,
        content: idea.content,
        users: idea.subscribers,
        skills: idea.skills
      }
      let httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Token '+localStorage.getItem("token")
        })
      };
      this.http.post("/api/idea",data,httpOptions).subscribe(
        (res:any)=>{
          resolve(true)
        },err=>{
          reject(err)
        }
      )
    })
  }
  async update(idea:IdeaModel):Promise<any>{
    return new Promise<any>((resolve, reject) => {
      let data = {
        title: idea.title,
        content: idea.content,
        users: idea.subscribers,
        skills: idea.skills
      }
      let httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Token '+localStorage.getItem("token")
        })
      };
      this.http.post("/api/ideas/"+idea.id+"/update",data,httpOptions).subscribe(
        (res:any)=>{
          resolve(true)
        },err=>{
          reject(err)
        }
      )
    })
  }
  // delete(idea:IdeaModel){
  //   let index = this.allIdeas.indexOf(this.getById(idea.id!))
  //   this.allIdeas = [...this.allIdeas.slice(0,index),...this.allIdeas.slice((index+1),(this.allIdeas.length-index))]
  // }

}
