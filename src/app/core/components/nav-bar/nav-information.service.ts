import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavInformationService {

  public informations = [
      {
          "title":"Home",
          "icon":"home",
          "endponint":"/home",
          "isSelected":false
      },
      {
          "title":"Profile",
          "icon":"person",
          "endponint":"/profile",
          "isSelected":false
      },
      {
          "title":"Comunnity",
          "icon":"group",
          "endponint":"/community",
          "isSelected":false
      },
      {
          "title":"Create Idea",
          "icon":"create",
          "endponint":"/idea",
          "isSelected":false
      },
      {
          "title":"Skills",
          "icon":"list",
          "endponint":"/skills",
          "isSelected":false
      },
      {
          "title":"Login",
          "icon":"login",
          "endponint":"/login",
          "isSelected":false
      }
    ]
  constructor() {}

}
