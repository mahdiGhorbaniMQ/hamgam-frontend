import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
    private informations:InformationService,
    private router:Router
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

  async login(username:string,email:string,password:string):Promise<any>{
    return new Promise<any>((resolve, reject) => {
      this.loading.isLoading = true
      this.http.post(environment.api+"/accounts/login/",{username:username,email:email,password:password}).subscribe(
        (res:any)=>{
          localStorage.setItem("token",res.key)
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
      this.http.post(environment.api+"/accounts/verify-email/",{key:key,password:password}).subscribe(
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
      this.http.post(environment.api+"/accounts/reset-password/",{key:key,password:password}).subscribe(
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
      this.http.post(environment.api+"/accounts/resend-verification/",{email:email}).subscribe(
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
      this.http.post(environment.api+"/accounts/request-password-reset/",{email:email}).subscribe(
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
  
    this.http.get(environment.api+"/accounts/user/",httpOptions).subscribe(
      (data:any)=>{
        
        if(!this.informations.users.has(data.pk))
          this.informations.users.set(data.pk,this.userInfo)

        this.userInfo = this.informations.users.get(data.pk)!
        this.userInfo.id = data.pk
        this.userInfo.email = data.email
        this.userInfo.username = data.username
        this.userInfo.firstName = data.first_name
        this.userInfo.lastName = data.last_name

        if(this.userInfo.firstName){
          // this.router.navigate(['/'])
        }
        else{
          this.router.navigate(['/profile/update'])
        }
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
      let data =new FormData() 
        data.set("username",user.username!)
        data.set("password",user.password!)
        data.set("email",user.email!)

      this.loading.isLoading = true
      this.http.post(environment.api+"/accounts/register/",data).subscribe(
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
          console.log(err);
          
          this.loading.isLoading = false
          reject(err)
        }
      )
    })
  }
  async update(data:any,id:any):Promise<any>{
    return new Promise<any>((resolve, reject) => {

      let httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Token '+localStorage.getItem("token")
        })
      };
      this.loading.isLoading = true
      this.http.put(environment.api+"/accounts/user/"+id+"/update/",data,httpOptions).subscribe(
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
