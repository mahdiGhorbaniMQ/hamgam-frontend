import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { SkillModel } from 'src/app/core/models/skill-model';
import { UserModel } from 'src/app/core/models/user-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { InformationService } from 'src/app/core/services/information.service';
import { SkillService } from 'src/app/core/services/skill.service';
import { ThemeService } from 'src/app/core/services/theme.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  filteredSkills:SkillModel[] = []
  filteredUsers:UserModel[] = []
  userInfo!:UserModel

  searchInSkills = true
  searchInUsers = false

  constructor(
    private navInfo:NavInformationService,
    private userService:UserService,
    public theme:ThemeService,
    private skillsService:SkillService,
    public informations:InformationService,
    private auth:AuthService
  ) { }

  ngOnInit(): void {
    this.userInfo = this.auth.userInfo
    this.navInfo.select(1)
  }
}
