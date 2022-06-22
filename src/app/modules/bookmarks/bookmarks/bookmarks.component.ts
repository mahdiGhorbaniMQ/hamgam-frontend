import { Component, OnInit } from '@angular/core';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  constructor(private navInfo:NavInformationService) {}

  ngOnInit(): void {
    this.navInfo.informations.map(item=>{
      if(item.title == "Bookmarks") item.isSelected = true
      else { item.isSelected = false}
    })
  }

}
