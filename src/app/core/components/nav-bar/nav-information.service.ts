import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ScreenService } from '../../services/screen.service';

@Injectable({
  providedIn: 'root'
})
export class NavInformationService {

  moreCondition!:boolean
  size!:number

  public informations = [
      {
          "title":"Home",
          "icon":"home",
          "endponint":"/home",
          "isSelected":false
      },
      {
        "title":"Comunnity",
        "icon":"group",
        "endponint":"/community",
        "isSelected":false
      },
      {
          "title":"Profile",
          "icon":"person",
          "endponint":"/profile",
          "isSelected":false
      },
      {
          "title":"Create Idea",
          "icon":"create",
          "endponint":"/idea",
          "isSelected":false
      },
      {
          "title":"Login",
          "icon":"login",
          "endponint":"/register",
          "isSelected":false
      }
  ]
  constructor(private screen:ScreenService,private auth:AuthService) {
    auth.isAuthenticated.subscribe(isAuthentucated=>{
      if(isAuthentucated){
        this.informations[this.informations.length-1] = {
          "title":"Logout",
          "icon":"logout",
          "endponint":"/login/logedout",
          "isSelected":false
        }
      }else{
        this.informations[this.informations.length-1] = {
          "title":"Login",
          "icon":"login",
          "endponint":"/register",
          "isSelected":false
        }
      }
    })
  }
  select(i:number){
    if(window.innerWidth<=700) this.screen.showMenu = false;
    this.informations.forEach((item,index)=>{
      if (index == i ) item.isSelected = true
      else item.isSelected = false
    })
    this.moreCondition = false
    this.informations.slice(this.size).forEach(item=>{
      if(item.isSelected){
        this.moreCondition = true
        return
      }
    })
  }
}
