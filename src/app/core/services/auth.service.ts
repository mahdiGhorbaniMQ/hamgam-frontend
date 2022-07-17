import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user-model';
import { InformationService } from './information.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private users:UserService,private http:HttpClient,private informations:InformationService) {
    if(localStorage.getItem("token")){
      this.isAuthenticated.next(true)
    }
    this.isAuthenticated.subscribe(isAuthenticated=>{
      if(isAuthenticated){
        this.fillUserInfo()
      }
    })
  }
  
  isAuthenticated = new BehaviorSubject<boolean>(false)

  userInfo:UserModel={skills:[]}

  async login(email:string,password:string):Promise<any>{
    return new Promise<any>((resolve, reject) => {
      
      localStorage.setItem("token","f19664213c3ede9929d0dd64533252064840e4c4")
      this.isAuthenticated.next(true)

      this.http.post("http://178.63.240.70:7556/api/accounts/login",{email:email,password:password}).subscribe(
        (res:any)=>{
          localStorage.setItem("token",res.token)
          this.isAuthenticated.next(true)
          resolve(true)
        },err=>{
          reject(err)
        })      
    })
  }
  fillUserInfo(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token '+localStorage.getItem("token")
      })
    };
  
    this.http.get("http://178.63.240.70:7556/api/accounts/users/me",httpOptions).subscribe(
      (data:any)=>{
        if(!this.informations.users.has(data.id))
          this.informations.users.set(data.id,this.userInfo)

        this.userInfo = this.informations.users.get(data.id)!
        this.userInfo.id = data.id
      },
      err=>{
        localStorage.removeItem("token")
        this.isAuthenticated.next(false)
      }
    )
  }
  logout(){
    this.userInfo = {skills:[]}
    localStorage.removeItem("token")
    this.isAuthenticated.next(false)
  }

  async register(user:UserModel,img:any):Promise<any>{
    return new Promise<any>((resolve, reject) => {
      let data = {
        email:user.email,
        password:user.password,
        firstName:user.firstName,
        bio:user.bio,
        lastName:user.lastName,
        skills:user.skills?.map(skill=>skill.id),
        avatar:img
      }
      this.http.post("http://178.63.240.70:7556/api/accounts/signup",data).subscribe(
        (res:any)=>{
          resolve(true)
        },err=>{
          reject(err)
        }
      )
    })
  }
  async update(user:UserModel,img:any):Promise<any>{
    return new Promise<any>((resolve, reject) => {
      let data = {
        email:user.email,
        password:user.password,
        firstName:user.firstName,
        lastName:user.lastName,
        skills:user.skills?.map(skill=>skill.id),
        avatar:img
      }
      let httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Token '+localStorage.getItem("token")
        })
      };
      this.http.post("http://178.63.240.70:7556/api/accounts/update",data,httpOptions).subscribe(
        (res:any)=>{
          resolve(true)
        },err=>{
          reject(err)
        }
      )
    })
  }
}
