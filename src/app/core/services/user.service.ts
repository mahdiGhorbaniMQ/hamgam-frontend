import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';
import { SkillService } from './skill.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  allUsers:UserModel[] = []


  constructor(private skills:SkillService) {

  }

  getUsersBySkill(skill:string):UserModel[]{
    return this.allUsers.filter(user=>{
      return user.skills.map(skill=>skill.name).includes(skill)
    })
  }

  getUserById(id:string):UserModel{
    return this.allUsers.filter(user=>{
      return user.id==id
    })[0]
  }
  getUsersByIds(ids:string[]):UserModel[]{
    return this.allUsers.filter(user=>{
      return ids.includes(user.id!)
    })
  }

  getUserByName(name:string):UserModel{
    return this.allUsers.filter(user=>{
      return user.name==name
    })[0]
  }
  getUsersByNames(names:string[]):UserModel[]{
    return this.allUsers.filter(user=>{
      return names.includes(user.name)
    })
  }

  getUserByemail(email:string):UserModel{
    return this.allUsers.filter(user=>{
      return user.email==email
    })[0]
  }
  getUsersByEmails(emails:string[]):UserModel[]{
    return this.allUsers.filter(user=>{
      return emails.includes(user.email)
    })
  }
}
