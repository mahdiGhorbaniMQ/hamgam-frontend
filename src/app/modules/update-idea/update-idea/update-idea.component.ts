import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { SkillModel } from 'src/app/core/models/skill-model';
import { UserModel } from 'src/app/core/models/user-model';

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

  constructor(
    private _formBuilder: FormBuilder,
    private navInfo:NavInformationService
  ){ }

  ngOnInit(): void {
    this.navInfo.select(0)
  }

  submit(){
    
  }

}
