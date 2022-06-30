import { Component, OnInit } from '@angular/core';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private navInfo:NavInformationService) { }

  ngOnInit(): void {
    this.navInfo.select(5)
  }

}
