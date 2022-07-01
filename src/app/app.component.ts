import { Component, HostListener } from '@angular/core';
import { InformationService } from './core/services/information.service';
import { ScreenService } from './core/services/screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter';
  constructor(public screen:ScreenService,private info:InformationService){}

  ngOnInit() {
    this.checkScreen()
  }
  
  @HostListener('window:resize')
  checkScreen(){
    this.screen.checkScreen()
  }

  selectBody(){
    if(window.innerWidth<700)
      this.screen.showMenu = false
  }
}
