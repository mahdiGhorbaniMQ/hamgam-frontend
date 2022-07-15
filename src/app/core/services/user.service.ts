import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  allUsers:UserModel[] = []


  constructor(
    private http:HttpClient
  ) {
    this.fillIdeas()
  }

  fillIdeas(){
    
  }
  
  getUsersBySkill(skill:string):UserModel[]{
    return this.allUsers.filter(user=>{
      return user.skills!.map(skill=>skill.name).includes(skill)
    })
  }

  getUserById(id:number):UserModel{
    // return new Promise<UserModel>((resolve, reject)=>{
    //   this.http.get("/api/accounts").subscribe(
    //     data=>{
          
    //     },
    //     err=>reject(err)
    //   )
    // })
    return this.allUsers.filter(user=>{
      return user.id! == id
    })[0]
  }
  getUsersByIds(ids:number[]):UserModel[]{
    return this.allUsers.filter(user=>{
      return ids.includes(user.id!)
    })
  }

  getUserByName(name:string):UserModel{
    return this.allUsers.filter(user=>{
      return user.firstName+" "+user.lastName==name
    })[0]
  }
  getUsersByNames(names:string[]):UserModel[]{
    return this.allUsers.filter(user=>{
      return names.includes(user.firstName+" "+user.lastName)
    })
  }

  getUserByemail(email:string):UserModel{
    return this.allUsers.filter(user=>{
      return user.email==email
    })[0]
  }
  getUsersByEmails(emails:string[]):UserModel[]{
    return this.allUsers.filter(user=>{
      return emails.includes(user.email!)
    })
  }
}
