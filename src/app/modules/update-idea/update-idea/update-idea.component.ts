import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { IdeaModel } from 'src/app/core/models/idea-model';
import { SkillModel } from 'src/app/core/models/skill-model';
import { UserModel } from 'src/app/core/models/user-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { IdeaService } from 'src/app/core/services/idea.service';
import { InformationService } from 'src/app/core/services/information.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-update-idea',
  templateUrl: './update-idea.component.html',
  styleUrls: ['./update-idea.component.scss']
})
export class UpdateIdeaComponent implements OnInit {

  updated = false
  formGroup = this._formBuilder.group({
    title: ['', Validators.required],
    content: ['',Validators.required],
    skills: [''],
    subscribers: [''],
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
    private navInfo:NavInformationService,
    private auth:AuthService,
    private router:Router,
    private ideaService:IdeaService,
    private snack:MatSnackBar
  ){ }

  ngOnInit(): void {
    this.navInfo.select(0)
    this.id = Number.parseInt(this.route.snapshot.paramMap.get("id")!)
    if(!this.informations.ideas.has(this.id)){
      this.informations.ideas.set(this.id,{})!
    }
    this.idea = this.informations.ideas.get(this.id)!

    this.formGroup.get("title")?.setValue(this.idea.title)
    this.formGroup.get("content")?.setValue(this.idea.content)
    this.idea.skills?.forEach(skill=>{
      this.selectedSkills.add(skill)
    })
    this.idea.subscribers?.forEach(user=>{
      this.selectedUsers.add(user)
    })

    if(!this.idea.title)
    setTimeout(() => {
      this.formGroup.get("title")?.setValue(this.idea.title)
      this.formGroup.get("content")?.setValue(this.idea.content)
      this.idea.skills?.forEach(skill=>{
        this.selectedSkills.add(skill)
      })
      this.idea.subscribers?.forEach(user=>{
        this.selectedUsers.add(user)
      })
    }, 1500);
  }

  async submit(){
    if(!this.auth.userInfo.id) this.router.navigate(["/login"])
    try {
      let body = {
        id:this.idea.id,
        creator:this.idea.creator,
        title:this.formGroup.get("title")!.value,
        content:this.formGroup.get("content")!.value,
        subscribers:this.selectedUsers,
        skills:this.selectedSkills,

      }
      this.idea.title = this.formGroup.get("title")!.value,
      this.idea.content = this.formGroup.get("content")!.value,
      this.idea.skills = []
      this.idea.subscribers = []
      this.selectedUsers.forEach(u=>{
        this.idea.subscribers?.push(u)
      })
      this.selectedSkills.forEach(s=>{
        this.idea.skills?.push(s)
      })
      let data = await this.ideaService.update(this.idea)
      if(data){
        this.updated = true
        this.router.navigate(["/idea/"+this.idea.id])
      }
    } catch (err:any) {
      console.log(err);
      
      this.snack.open(err.message,"ok!")
      setTimeout(() => {
        this.snack.dismiss()
      }, 1500);    }
  }

  canExit() : boolean {
 
    if(this.updated) return true
    else if((this.formGroup.touched||this.formGroup.touched||this.formGroup.touched)){
      if (confirm("با خارج شدن از صفحه تغییرات اعمال شده از بین می‌رود، آیا مطمئنید؟")) {
        return true
      } else {
        return false
      }
    }
    return true
  }

}
