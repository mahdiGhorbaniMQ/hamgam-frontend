import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavInformationService {

  public informations = [
      {
          "title":"Home",
          "icon":"home",
          "endponint":"home",
          "isSelected":false
      },
      {
          "title":"Explore",
          "icon":"explore",
          "endponint":"explore",
          "isSelected":false
      },
      {
          "title":"Notifications",
          "icon":"notifications",
          "endponint":"notifications",
          "isSelected":false
      },
      {
          "title":"Messages",
          "icon":"message",
          "endponint":"messages",
          "isSelected":false
      },
      {
          "title":"Bookmarks",
          "icon":"bookmark",
          "endponint":"bookmarks",
          "isSelected":false
      },
      {
          "title":"Lists",
          "icon":"list",
          "endponint":"lists",
          "isSelected":false
      },
      {
          "title":"Profile",
          "icon":"person",
          "endponint":"profile",
          "isSelected":false
      },
      {
          "title":"Other 1",
          "icon":"block",
          "endponint":"other",
          "isSelected":false
      },
      {
          "title":"Other 2",
          "icon":"block",
          "endponint":"other",
          "isSelected":false
      },
      {
          "title":"Other 3",
          "icon":"block",
          "endponint":"other",
          "isSelected":false
      }
    ]
  constructor() {}

}
