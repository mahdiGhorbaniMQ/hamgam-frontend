import { Component, ElementRef, OnInit } from '@angular/core';
import { SkillModel } from 'src/app/core/models/skill-model';
import { UserModel } from 'src/app/core/models/user-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { SkillService } from 'src/app/core/services/skill.service';
import { ThemeService } from 'src/app/core/services/theme.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  constructor(
    private auth:AuthService,
    public theme:ThemeService,
  ) { }

  skills!:SkillModel[]

  ngOnInit(): void {
    this.skills = this.auth.userInfo.skills    
  }

  reload(el:ElementRef){
    el.nativeElement.classList.add("rotate")
    setTimeout(() => {
      el.nativeElement.classList.remove("rotate")
    }, 600);
  }
}
