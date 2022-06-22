import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  get userInfo(){
    return{
      name:"mahdi",
      family:"ghorbani",
      image:"../../../../../assets/profile.jpg",
      username:"MahdiGhorbaniMQ",
      location:"Tehran",
      bio:"CE Student, live in the tehran!",
      followers:"5.6k",
      tweets:749,
      followings:984
    }
  }
}
