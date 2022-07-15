import { Component, ElementRef, OnInit } from '@angular/core';
import { SkillModel } from 'src/app/core/models/skill-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { ThemeService } from 'src/app/core/services/theme.service';

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
    this.skills = this.auth.userInfo.skills!   
  }

  reload(el:ElementRef){
    el.nativeElement.classList.add("rotate")
    setTimeout(() => {
      el.nativeElement.classList.remove("rotate")
    }, 600);
  }
}
