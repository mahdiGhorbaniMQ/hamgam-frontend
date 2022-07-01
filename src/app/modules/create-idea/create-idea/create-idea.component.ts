import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatStepperIntl } from '@angular/material/stepper';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import { SkillModel } from 'src/app/core/models/skill-model';
import { UserModel } from 'src/app/core/models/user-model';

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
    private navInfo:NavInformationService
  ){ }

  ngOnInit(): void {
    this.navInfo.select(3)
  }

  submit(){
    
  }
}
