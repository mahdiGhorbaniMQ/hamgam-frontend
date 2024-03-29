import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SkillModel } from '../models/skill-model';
import { UserModel } from '../models/user-model';
import { InformationService } from './information.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private informations:InformationService) { }

  search(value:string):Observable<UserModel[]>{
    let obs = new BehaviorSubject<UserModel[]>([])
    let allUsers: UserModel[] = [];
    this.informations.users.forEach((user,id)=>allUsers.push(user))
    obs.next(
      allUsers.filter(user=>{
        
        if(typeof(value) != "string") return allUsers

        let name = user.firstName!.toLowerCase()+" "+user.lastName!.toLowerCase()
        let email = user.email!.toLowerCase()
        return name.includes(value.toLowerCase()) || email.includes(value.toLowerCase())
      })
    )
    return obs.asObservable();
  }

  searchSkill(value:string):Observable<SkillModel[]>{
    let obs = new BehaviorSubject<SkillModel[]>([])
    let allSkills: SkillModel[] = [];
    this.informations.skills.forEach((skill,id)=>allSkills.push(skill))
    obs.next(
      allSkills.filter(skill=>{
        
        if(typeof(value) != "string") return allSkills

        let name = skill.name!.toLowerCase()
        return name.includes(value.toLowerCase())
      })
    )
    return obs.asObservable();
  }
}
