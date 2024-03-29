import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user-model';
import { InformationService } from './information.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  allUsers:UserModel[] = []


  constructor(
    private loading:LoadingService,
    private http:HttpClient,
    private informations:InformationService
  ) {
    this.fillUsers()
  }

  async fillUsers(){
    this.http.get(environment.api+"/accounts/user/all").subscribe(
      (data:any)=>{
        data.forEach(async (item:any) => {
          let user:UserModel = {skills:[]};

          if(this.informations.users.has(item.id!)){
            user = this.informations.users.get(item.id)!
          }
          
          user.id = item.id
          user.email = item.email
          user.img = item.avatar?item.avatar:"/assets/no-prof.jpg"

          this.informations.users.set(user.id!,user)           
          
          await this.fillById(user.id!)

        });
        this.loading.loaded.next('users')
      },
      err=>{}
    )
  }
  


  async fillById(id:number):Promise<UserModel>{
    return new Promise<UserModel>((resolve, reject) => {
      this.http.get(environment.api+"/accounts/user/"+id).subscribe(
        (data:any)=>{
          let user = this.informations.users.get(id)!;
          
          user.firstName = data.first_name
          user.lastName = data.last_name
          user.bio = data.bio
          
        }
      )
    })
  }

  getUsersBySkill(skill:string):UserModel[]{
    return this.allUsers.filter(user=>{
      return user.skills!.map(skill=>skill.name).includes(skill)
    })
  }

  getUserById(id:number):UserModel{
    // return new Promise<UserModel>((resolve, reject)=>{
    //   this.http.get(environment.api+"/accounts").subscribe(
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

  getUserByName(name:string):UserModel|null{
    let res!:UserModel
    this.informations.users.forEach((user,id)=>{
      if((user.firstName+" "+user.lastName)==name){
        res = user
      }
    })
    return res?res:null
  }
  getUsersByNames(names:string[]):UserModel[]{
    return this.allUsers.filter(user=>{
      return names.includes(user.firstName+" "+user.lastName)
    })
  }

  getUserByEmail(email:string):UserModel|null{
    let res!:UserModel
    this.informations.users.forEach((user,id)=>{
      if(user.email==email){
        res = user
      }
    })
    return res?res:null
  }
  getUsersByEmails(emails:string[]):UserModel[]{
    return this.allUsers.filter(user=>{
      return emails.includes(user.email!)
    })
  }
}
