import { Component, OnInit } from '@angular/core';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { SkillModel } from 'src/app/core/models/skill-model';
import { UserModel } from 'src/app/core/models/user-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { SkillService } from 'src/app/core/services/skill.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  constructor(
    private navInfo:NavInformationService,
    private userService:UserService,
    private skillsService:SkillService,
    private auth:AuthService
  ) { }

  userInfo!:UserModel
  users!:UserModel[]
  allSkills!:SkillModel[]
  yourSkills!:SkillModel[]

  ngOnInit(): void {
    this.userInfo = this.auth.userInfo
    this.users = this.userService.allUsers
    this.allSkills = this.skillsService.allSkills
    this.yourSkills = this.skillsService.allSkills.filter(skill=>skill.users.includes(this.userInfo))
    this.navInfo.select(1)
  }
}
