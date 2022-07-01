import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user-model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private users:UserService) { }
  
  isAuthentication = new BehaviorSubject<boolean>(true)

  get userInfo(){
    
    return this.users.getUserById("0")
    // {
    //   name:"mahdi",
    //   family:"ghorbani",
    //   image:"../../../../../assets/profile.jpg",
    //   username:"MahdiGhorbaniMQ",
    //   location:"Tehran",
    //   bio:"CE Student, live in the tehran!",
    //   followers:"5.6k",
    //   tweets:749,
    //   followings:984
    // }
  }

  login(username:string,password:string){}
  register(user:UserModel){
    user.id = this.users.allUsers.map(user=>user.id).map(id=>Number.parseInt(id!)).sort().reverse()[0]+1+"" 
    this.users.allUsers.push(user)
  }
  update(user:UserModel){
    let index = this.users.allUsers.indexOf(this.users.getUserById(user.id!))
    this.users.allUsers[index] = user
  }
  changePassReq(email:string){}
  changePass(token:string){}
}
