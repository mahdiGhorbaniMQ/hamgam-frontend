import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { IdeaModel } from 'src/app/core/models/idea-model';
import { SkillModel } from 'src/app/core/models/skill-model';
import { UserModel } from 'src/app/core/models/user-model';
import { InformationService } from 'src/app/core/services/information.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-update-idea',
  templateUrl: './update-idea.component.html',
  styleUrls: ['./update-idea.component.scss']
})
export class UpdateIdeaComponent implements OnInit {

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

  idea!:IdeaModel
  id!:number

  constructor(
    private _formBuilder: FormBuilder,
    public theme:ThemeService,
    private route:ActivatedRoute,
    private informations:InformationService,
    private navInfo:NavInformationService
  ){ }

  ngOnInit(): void {
    this.navInfo.select(0)
    this.id = Number.parseInt(this.route.snapshot.paramMap.get("id")!)
    if(!this.informations.ideas.has(this.id)){
      this.informations.ideas.set(this.id,{})!
    }
    this.idea = this.informations.ideas.get(this.id)!

    this.contentFormGroup.get("title")?.setValue(this.idea.title)
    this.contentFormGroup.get("content")?.setValue(this.idea.content)
    this.idea.skills?.forEach(skill=>{
      this.selectedSkills.add(skill)
    })
    this.idea.subscribers?.forEach(user=>{
      this.selectedUsers.add(user)
    })

    if(!this.idea.title)
    setTimeout(() => {
      this.contentFormGroup.get("title")?.setValue(this.idea.title)
      this.contentFormGroup.get("content")?.setValue(this.idea.content)
      this.idea.skills?.forEach(skill=>{
        this.selectedSkills.add(skill)
      })
      this.idea.subscribers?.forEach(user=>{
        this.selectedUsers.add(user)
      })
    }, 1500);
  }

  submit(){
    
  }

  canExit() : boolean {
 
    if((this.contentFormGroup.touched||this.skillsFormGroup.touched||this.subscribersFormGroup.touched)){
      if (confirm("با خارج شدن از صفحه تغییرات اعمال شده از بین می‌رود، آیا مطمئنید؟")) {
        return true
      } else {
        return false
      }
    }
    return true
  }

}
