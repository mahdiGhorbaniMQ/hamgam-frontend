import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { UserModel } from '../models/user-model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private userService:UserService) { }

  search(value:string):Observable<UserModel[]>{
    let obs = new BehaviorSubject<UserModel[]>([])
    obs.next(
      this.userService.allUsers.filter(user=>{
        
        if(typeof(value) != "string") return this.userService.allUsers

        let name = user.firstName!.toLowerCase()+" "+user.lastName!.toLowerCase()
        let email = user.email!.toLowerCase()
        return name.includes(value.toLowerCase()) || email.includes(value.toLowerCase())
      })
    )
    return obs.asObservable();
  }
}
