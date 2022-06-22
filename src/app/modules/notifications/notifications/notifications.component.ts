import { Component, OnInit } from '@angular/core';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(private navInfo:NavInformationService) {}

  ngOnInit(): void {
    this.navInfo.informations.map(item=>{
      if(item.title == "Notifications") item.isSelected = true
      else { item.isSelected = false}
    })
  }

}
