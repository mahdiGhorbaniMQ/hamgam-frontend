import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { SkillModel } from 'src/app/core/models/skill-model';
import { UserModel } from 'src/app/core/models/user-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { IdeaService } from 'src/app/core/services/idea.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-create-idea',
  templateUrl: './create-idea.component.html',
  styleUrls: ['./create-idea.component.scss']
})
export class CreateIdeaComponent implements OnInit {

  created = false

  contentFormGroup = this._formBuilder.group({
    title: ['', Validators.required],
    content: ['',Validators.required],
  });
  skillsFormGroup = this._formBuilder.group({
    skills: [[], Validators.required],
  });
  subscribersFormGroup = this._formBuilder.group({
    subscribers: [[], Validators.required],
  });

  selectedSkills: Set<SkillModel> = new Set()
  selectedUsers: Set<UserModel> = new Set()

  constructor(
    private _formBuilder: FormBuilder,
    public theme:ThemeService,
    private snack:MatSnackBar,
    private router:Router,
    private ideaService:IdeaService,
    private navInfo:NavInformationService,
    private auth:AuthService
  ){ }

  ngOnInit(): void {
    this.navInfo.select(3)
  }

  async submit(){
    if(!this.auth.userInfo.id) this.router.navigate(["/login"])
    try {
      let body = {
        creator:this.auth.userInfo,
        title:this.contentFormGroup.get("title")!.value,
        content:this.contentFormGroup.get("content")!.value,
        subscribers:this.selectedUsers,
        skills:this.selectedSkills
      }      
      let data = await this.ideaService.create(body)
      if(data){
        this.created = true
        this.router.navigate(["/idea/"+data.id])
      }
    } catch (err:any) {
      console.log(err);
      
      this.snack.open(err.message,"ok!")
    }
  }

  canExit() : boolean {
 
    if(this.created) return true
    else if((this.contentFormGroup.touched||this.skillsFormGroup.touched||this.subscribersFormGroup.touched)){
      if (confirm("با خارج شدن از صفحه اطلاعات وارد شده از بین می‌رود، آیا مطمئنید؟")) {
        return true
      } else {
        return false
      }
    }
    return true
  }
}
