import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user-model';
import { InformationService } from './information.service';
import { LoadingService } from './loading.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private loading:LoadingService,
    private users:UserService,
    private http:HttpClient,
    private informations:InformationService
  ) {
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
      this.loading.isLoading = true
      this.http.post(environment.api+"/accounts/login/",{email:email,password:password}).subscribe(
        (res:any)=>{
          localStorage.setItem("token",res.token)
          this.isAuthenticated.next(true)
          resolve(true)
        },err=>{
          console.log(err);
          
          reject(err.message)
        })      
    })
  }
  async verify(key:string,password:string):Promise<any>{
    return new Promise<any>((resolve, reject) => {
      this.loading.isLoading = true
      this.http.post(environment.api+"/acc/verify-email/",{kay:key,password:password}).subscribe(
        (res:any)=>{
          resolve(true)
        },err=>{
          reject(err)
        })      
    })
  }
  async changePass(key:string,password:string):Promise<any>{
    return new Promise<any>((resolve, reject) => {
      this.loading.isLoading = true
      this.http.post(environment.api+"/acc/reset-password/",{key:key,password:password}).subscribe(
        (res:any)=>{
          resolve(true)
        },err=>{
          reject(err)
        })      
    })
  }
  async resendVerify(email:string):Promise<any>{
    return new Promise<any>((resolve, reject) => {
      this.loading.isLoading = true
      this.http.post(environment.api+"/acc/resend-verification/",{email:email}).subscribe(
        (res:any)=>{
          resolve(true)
        },err=>{
          reject(err)
        })      
    })
  }
  async changePassReq(email:string):Promise<any>{
    return new Promise<any>((resolve, reject) => {
      this.loading.isLoading = true
      this.http.post(environment.api+"/acc/request-password-reset/",{email:email}).subscribe(
        (res:any)=>{
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
  
    this.http.get(environment.api+"/accounts/users/me",httpOptions).subscribe(
      (data:any)=>{
        
        if(!this.informations.users.has(data.id))
          this.informations.users.set(data.id,this.userInfo)

        this.userInfo = this.informations.users.get(data.id)!
        this.userInfo.id = data.id
        this.userInfo.email = data.email
        this.userInfo.firstName = data.first_name
        this.userInfo.lastName = data.last_name
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

  async register(user:UserModel):Promise<any>{
    return new Promise<any>((resolve, reject) => {
      let data = {
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        password:user.password,
        // bio:user.bio,
        // skills:user.skills?.map(skill=>skill.id),
        // avatar:img,
        // avatar:"/assets/no-prof.jpg"
      }
      this.loading.isLoading = true
      this.http.post(environment.api+"/accounts/signup",data).subscribe(
        async (res:any)=>{
          // try{
            // await this.login(user.email!,user.password!)
            // await this.update(user,img)
          // }
          // catch(err){
            // reject(err)
          // }
          this.loading.isLoading = false
          resolve(true)
        },err=>{
          this.loading.isLoading = false
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
        // avatar:"/assets/no-prof.jpg"
      }
      let httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Token '+localStorage.getItem("token")
        })
      };
      this.loading.isLoading = true
      this.http.post(environment.api+"/accounts/update",data,httpOptions).subscribe(
        (res:any)=>{
          this.loading.isLoading = false
          resolve(true)
        },err=>{
          this.loading.isLoading = false
          reject(err)
        }
      )
    })
  }
}
