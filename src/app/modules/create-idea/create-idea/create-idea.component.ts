import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatStepperIntl } from '@angular/material/stepper';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-create-idea',
  templateUrl: './create-idea.component.html',
  styleUrls: ['./create-idea.component.scss']
})
export class CreateIdeaComponent implements OnInit {



  separatorKeysCodes: number[] = [ENTER, COMMA];
  skillCtrl = new FormControl('');
  filteredSkills!: Observable<string[]>;
  skills: string[] = [];
  allSkills: string[] = ['Java', 'Spring', 'Node', 'Django', 'React', 'Angular'];

  @ViewChild('skillInput') skillInput!: ElementRef<HTMLInputElement>;

  userCtrl = new FormControl('');
  filteredUsers!: Observable<{
    name:string,
    family:string,
    image:string,
    username:string
  }[] >;
  users: {
    name:string,
    family:string,
    image:string,
    username:string
  }[] = [];
  allUsers:{
    name:string,
    family:string,
    image:string,
    username:string
  }[] = [
    {
      name:"سارا",
      family:"استارک",
      image:"../../../../assets/profile2.jpg",
      username:"sara_123"
    },
    {
      name:"کتی",
      family:"لینگارد",
      image:"../../../../assets/profile2.jpg",
      username:"hello1010"
    },
    {
      name:"جان",
      family:"دو",
      image:"../../../../assets/profile2.jpg",
      username:"JonDoeJon"
    },
  ];

  @ViewChild('userInput') userInput!: ElementRef<HTMLInputElement>;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  thertFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _matStepperIntl: MatStepperIntl,
    private navInfo:NavInformationService
  ){
      this.filteredSkills = this.skillCtrl.valueChanges.pipe(
        startWith(null),
        map((skill: string | null) => (skill ? this._filter(skill) : this.allSkills.slice())),
      );
      this.filteredUsers = this.userCtrl.valueChanges.pipe(
        startWith(null),
        map((user: string | null) => (user ? this._filterUser(user) : this.allUsers.slice())),
      );
  }

  ngOnInit(): void {
    this.navInfo.select(3)
  }


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.skills.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.skillCtrl.setValue(null);
  }

  removeSkill(skill: string): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.skills.push(event.option.viewValue);
    this.skillInput.nativeElement.value = '';
    this.skillCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSkills.filter(skill => skill.toLowerCase().includes(filterValue));
  }
  

  addUser(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.users.push(JSON.parse(value));
    }

    // Clear the input value
    event.chipInput!.clear();

    this.userCtrl.setValue(null);
  }

  removeUser(user: any): void {
    const index = this.users.indexOf(user);

    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }

  selectedUser(event: MatAutocompleteSelectedEvent): void {
    this.users.push(JSON.parse(event.option.viewValue));
    this.userInput.nativeElement.value = '';
    this.userCtrl.setValue(null);
  }

  private _filterUser(value: string): {
    name:string,
    family:string,
    image:string,
    username:string
  }[] {
    const filterValue = value.toLowerCase();

    return this.allUsers.filter(user => (user.name.toLowerCase()+user.family.toLocaleLowerCase()).includes(filterValue));
  }
}
