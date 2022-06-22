import { Component, OnInit } from '@angular/core';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  constructor(private navInfo:NavInformationService) {}

  ngOnInit(): void {
    this.navInfo.informations.map(item=>{
      if(item.title == "Explore") item.isSelected = true
      else { item.isSelected = false}
    })
  }

}
