import { Component, OnInit } from '@angular/core';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private navInfo:NavInformationService) { }

  ngOnInit(): void {
    this.navInfo.select(2)
  }

}
