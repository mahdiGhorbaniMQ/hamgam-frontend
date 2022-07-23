import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SkillModel } from '../models/skill-model';
import { InformationService } from './information.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  allSkills:SkillModel[] = []

  constructor(private http:HttpClient,private informations:InformationService) {
    this.fillSkills()
  }

  async fillSkills(){
    this.http.get("/api/skills").subscribe(
      (data:any)=>{
        data.forEach(async (item:any) => {
          
          let skill:SkillModel = {};

          if(this.informations.skills.has(item.id!)){
            skill = this.informations.skills.get(item.id)!
          }
          
          skill.id = item.id,
          skill.name = item.name,
          skill.categories = []
          skill.image = "/assets/no-prof.jpg"
          skill.users = []

          this.informations.skills.set(skill.id!,skill)           
          
          await this.fillById(skill.id!)

        });
      },
      err=>{}
    )
  }



  async fillById(id:number):Promise<SkillModel>{
    return new Promise<SkillModel>((resolve, reject) => {
      this.http.get("/api/skills/"+id).subscribe(
        (data:any)=>{
          let skill = this.informations.skills.get(id)!;
          
          skill.name = data.name
          skill.id = data.id

          data.users.forEach((userItem:any) => {
            if(this.informations.users.has(userItem.id)){
              let user = this.informations.users.get(userItem.id)
              if(user?.skills)
                user.skills?.push(skill)
              else 
                user!.skills = [skill]
            }
            else
              this.informations.users.set(userItem.id,{skills:[skill]})
            skill.users?.push(this.parseUser(userItem))
          });

          data.categories.forEach((categoryItem:any) => {            
            skill.categories?.push(this.parseCategory(categoryItem))
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
      user!.img = userData.avatar?userData.avatar:"/assets/no-prof.jpg"

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
        img: userData.avatar?userData.avatar:"/assets/no-prof.jpg",
        firstName: "",
        lastName: ""
      }
      this.informations.users.set(user.id!,user)
      return this.informations.users.get(user.id!)!
    }
  }

  parseCategory(categoryData:any){    
    if(this.informations.categories.has(categoryData.id)){
      let category = this.informations.categories.get(categoryData.id)!
      category!.id = categoryData.id
      category!.name = categoryData.name
      return category
    }
    else{
      let category = {
        id: categoryData.id,
        name: categoryData.name,
      }
      this.informations.categories.set(category.id!,category)
      return this.informations.categories.get(category.id!)!
    }
  }

  getByName(name:string):SkillModel | null{
    let res = null
    this.informations.skills.forEach((skill,id)=>{
      if(skill.name == name){
        res = skill
      }
    })
    return res
  }
  async create(name:string, cat:string[],img:any,owner:number):Promise<any>{
    return new Promise<any>((resolve, reject) => {
      let data = {
        name: name,
        categories: cat,
        owner:owner,
        users:[],
        ideas:[]
      }
      let httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Token '+localStorage.getItem("token")
        })
      };
      this.http.post("/api/skills/create",data,httpOptions).subscribe(
        (res:any)=>{

          this.informations.skills.set(res.id,{
            categories:[],
            users:[],
            image:"/assets/no-prof.jpg"
          })          
          this.fillById(res.id)
          resolve(true)
          
        },err=>{
          reject(err)
        }
      )
    })
  }


  getByUserId(id:string){
    // return this.allSkills.filter(skill=>skill.users.includes())
  }





  has(arr1:any[],arr2:any[]):boolean{
    let res = false
    arr2.forEach(item=>{
      if(arr1.includes(item)) res = true
    })
    return res
  }
}
