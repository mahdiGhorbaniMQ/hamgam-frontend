import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { SkillModel } from 'src/app/core/models/skill-model';
import { UserModel } from 'src/app/core/models/user-model';
import { IdeaService } from 'src/app/core/services/idea.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-create-idea',
  templateUrl: './create-idea.component.html',
  styleUrls: ['./create-idea.component.scss']
})
export class CreateIdeaComponent implements OnInit {


  contentFormGroup = this._formBuilder.group({
    title: ['', Validators.required],
    content: ['',Validators.required],
  });
  skillsFormGroup = this._formBuilder.group({
    skills: ['', Validators.required],
  });
  subscribersFormGroup = this._formBuilder.group({
    subscribers: ['', Validators.required],
  });

  selectedSkills: Set<SkillModel> = new Set()
  selectedUsers: Set<UserModel> = new Set()

  constructor(
    private _formBuilder: FormBuilder,
    public theme:ThemeService,
    private snack:MatSnackBar,
    private router:Router,
    private ideaService:IdeaService,
    private navInfo:NavInformationService
  ){ }

  ngOnInit(): void {
    this.navInfo.select(3)
  }

  async submit(){
    try {
      let data = await this.ideaService.create({
        title:this.contentFormGroup.get("title")!.value,
        content:this.contentFormGroup.get("content")!.value,
        subscribers:this.subscribersFormGroup.get("subscribers")!.value,
        skills:this.skillsFormGroup.get("skills")!.value
      })
      if(data){
        this.router.navigate(["/idea/"+data.id])
      }
    } catch (err:any) {
      this.snack.open(err.message,"ok!")
    }
  }

  canExit() : boolean {
 
    if((this.contentFormGroup.touched||this.skillsFormGroup.touched||this.subscribersFormGroup.touched)){
      if (confirm("با خارج شدن از صفحه اطلاعات وارد شده از بین می‌رود، آیا مطمئنید؟")) {
        return true
      } else {
        return false
      }
    }
    return true
  }
}
