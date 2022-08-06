import { Component, HostListener } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { IdeaService } from './core/services/idea.service';
import { InformationService } from './core/services/information.service';
import { LoadingService } from './core/services/loading.service';
import { ScreenService } from './core/services/screen.service';
import { SkillService } from './core/services/skill.service';
import { ThemeService } from './core/services/theme.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter';
  constructor(
    private loading:LoadingService,
    public screen:ScreenService,
    public theme:ThemeService,
    private info:InformationService,
    private userService:UserService,
    private authService:AuthService,
    private ideaService:IdeaService,
    private skillService:SkillService,
  ){
  }

  ngOnInit() {
    this.checkScreen()
    // this.loading.isLoading = true
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
