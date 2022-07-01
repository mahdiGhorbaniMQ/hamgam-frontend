import { Injectable } from '@angular/core';
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
          "endponint":"/login",
          "isSelected":false
      }
    ]
  constructor(private screen:ScreenService) {}
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
