import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommentModel } from '../models/comment-model';
import { IdeaModel } from '../models/idea-model';
import { SkillModel } from '../models/skill-model';
import { UserModel } from '../models/user-model';
import { InformationService } from './information.service';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  constructor(private http:HttpClient,private informations:InformationService) {
    this.fillIdeas()
  }

  async fillIdeas(){
    this.http.get(environment.api+"/ideas").subscribe(
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
      err=>{}
    )
  }

  async fillById(id:number):Promise<IdeaModel>{
    return new Promise<IdeaModel>((resolve, reject) => {
      this.http.get(environment.api+"/ideas/"+id).subscribe(
        (data:any)=>{
          let idea = this.informations.ideas.get(id)!;
          
          idea.content = data.content
          idea.date = new Date(data.pub_date)

          data.users.forEach((userItem:any) => {
            idea.subscribers?.push(this.parseUser(userItem))
          });

          data.likes.forEach((userItem:any) => {
            if(!this.informations.users.has(userItem)){
              this.informations.users.set(userItem,{skills:[]})
            }
            idea.likes?.push(this.informations.users.get(userItem)!)            
          });

          this.http.get(environment.api+"/ideas/comments").subscribe((comments:any)=>{

            comments.forEach((comment:any) => {
              if(comment.idea == idea.id)
                idea.comments?.push(this.parseComment(comment,idea))
            });

          })
          resolve(idea)
        }
      )
    })
  }

  parseUser(userData:any){    
    if(this.informations.users.has(userData.id)){
      let user = this.informations.users.get(userData.id)!
      user!.id = userData.id
      user!.email = userData.email
      // user!.img = userData.avatar?userData.avatar:"/assets/no-prof.jpg"
      user!.img = "/assets/no-prof.jpg"

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
        // img: userData.avatar?userData.avatar:"/assets/no-prof.jpg",
        img: "/assets/no-prof.jpg",
        firstName: "",
        lastName: ""
      }
      this.informations.users.set(user.id!,user)
      return this.informations.users.get(user.id!)!
    }
  }

  parseComment(commentData:any,idea:IdeaModel){
    if(this.informations.comments.has(commentData.id)){
      let comment = this.informations.comments.get(commentData.id)!
      comment.id = commentData.id
      comment.date = new Date(commentData.publish)
      comment.content = commentData.content
      let commentor = {}
      if(this.informations.users.has(commentData.commentor))
        commentor = this.informations.users.get(commentData.commentor)!
      else 
        this.informations.users.set(commentData.commentor,commentor)!
      comment.user = commentor
      comment.idea = idea
      return comment
    }
    else{
      let comment:CommentModel = {
        id: commentData.id,
        date: new Date(commentData.publish),
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


  async create(idea:any):Promise<any>{
    return new Promise<any>((resolve, reject) => {
      let skills:number[] = []
      let cats:number[] = []
      let catSet = new Set<number>()

      idea.skills?.forEach((skill:SkillModel) => {
        skills.push(skill.id!)
        skill.categories?.forEach(c=>{catSet.add(c.id!)})
      });
      catSet.forEach(c=>{cats.push(c)})
      
      let data = {
        creator: idea.creator!.id,
        title: idea.title,
        content: idea.content,
        pub_date: new Date(),
        status: "published",
        skills: skills,
        cat: cats
      }
      let httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Token '+localStorage.getItem("token")
        })
      };
      this.http.post(environment.api+"/ideas/create/",data,httpOptions).subscribe(
        async (res:any)=>{
          this.informations.ideas.set(res.id,{
            creator:idea.creator,
            title:res.title,
            content:res.content,
            date:new Date(res.pub_date),
            id:res.id,
            skills: [],
            comments: [],
            likes: [],
            subscribers: []
          })
          
          let newIdea = this.informations.ideas.get(res.id)!
          idea.subscribers.forEach((u:UserModel) => {
            newIdea.subscribers?.push(u)
          });
          idea.skills.forEach((s:SkillModel) => {
            newIdea.skills?.push(s)
          });
          await this.update(newIdea)
          resolve(res)
        },err=>{
          reject(err)
        }
      )
    })
  }
  async update(idea:IdeaModel):Promise<any>{
    
    return new Promise<any>((resolve, reject) => {
      let skills:number[] = []
      let cats:number[] = []
      let likes:number[] = []
      let catSet = new Set<number>()

      idea.skills?.forEach((skill:SkillModel) => {
        skills.push(skill.id!)
        skill.categories?.forEach(c=>{catSet.add(c.id!)})
      });
      idea.likes?.forEach((u:UserModel) => {
        likes.push(u.id!)
      });
      catSet.forEach(c=>{cats.push(c)})

      let users:number[]= []

      idea.subscribers?.forEach((u:UserModel) => {
        users.push(u.id!)
      });
      let data = {
        title: idea.title,
        content: idea.content,
        users: users,
        skills: skills,
        cat: cats,
        status: "published",
        pub_date: idea.date,
        likes: likes
      }
      let httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Token '+localStorage.getItem("token")
        })
      };
      
      this.http.put(environment.api+"/ideas/"+idea.id+"/update",data,httpOptions).subscribe(
        (res:any)=>{          
          resolve(res)
        },err=>{
          console.log(err);
          
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
