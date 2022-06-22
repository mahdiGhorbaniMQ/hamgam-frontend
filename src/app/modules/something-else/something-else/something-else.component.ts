import { Component, OnInit } from '@angular/core';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';

@Component({
  selector: 'app-something-else',
  templateUrl: './something-else.component.html',
  styleUrls: ['./something-else.component.scss']
})
export class SomethingElseComponent implements OnInit {

  constructor(private navInfo:NavInformationService) {}

  ngOnInit(): void {
    this.navInfo.informations.map(item=>{
      if(item.title == "Other 1") item.isSelected = true
      else { item.isSelected = false}
    })
  }

}
