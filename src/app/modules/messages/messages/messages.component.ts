import { Component, OnInit } from '@angular/core';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(private navInfo:NavInformationService) {}

  ngOnInit(): void {
    this.navInfo.informations.map(item=>{
      if(item.title == "Messages") item.isSelected = true
      else { item.isSelected = false}
    })
  }

}
