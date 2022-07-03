import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AddSkillFormComponent } from 'src/app/core/components/add-skill-form/add-skill-form/add-skill-form.component';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { SkillModel } from 'src/app/core/models/skill-model';
import { SkillService } from 'src/app/core/services/skill.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  name = new FormControl('', [Validators.required]);
  bio = new FormControl('', []);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required])
  hidePass = true;
  formGroup = this._formBuilder.group({
    name: this.name,
    bio: this.bio,
    email: this.email,
    password: this.password
  });



  separatorKeysCodes: number[] = [ENTER, COMMA];
  skillCtrl = new FormControl('');
  filteredSkills!: Observable<SkillModel[]>;  
  selectedSkills: Set<SkillModel> = new Set()

  @ViewChild('skillInput') skillInput!: ElementRef<HTMLInputElement>;
  constructor(
    private _formBuilder: FormBuilder,
    private navInfo:NavInformationService,
    private skillService:SkillService,
     private dialog: MatDialog) {
    this.filteredSkills = this.skillCtrl.valueChanges.pipe(
      startWith(null),
      map((skillName: string) => (skillName ? this._filter(skillName) : skillService.allSkills.slice())),
    );
  }
  ngOnInit(): void {
    this.navInfo.select(4)
  }


  getNameError(){
    if (this.email.hasError('required')) {
      return 'فیلد نام ضروری است';
    }

    return '';
  }

  getEmailError() {
    if (this.email.hasError('required')) {
      return 'فیلد ایمیل ضروری است';
    }

    return this.email.hasError('email') ? 'ایمیل معتبر نیست' : '';
  }
  getPassError() {
    if (this.email.hasError('required')) {
      return 'فیلد رمز عبور ضروری است';
    }
    return '';
  }
  
  register(){}


  add(event: MatChipInputEvent): void {
    const value = event.value;
    let skill = this.skillService.getByName(value)
    if(skill){
      this.selectedSkills.add(skill);
      event.chipInput!.clear();  
      this.skillCtrl.setValue(null);
    }
  }

  removeSkill(skill: SkillModel): void {
    this.selectedSkills.delete(skill)
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedSkills.add(event.option.value);
    this.skillInput.nativeElement.value = '';
    this.skillCtrl.setValue(null);
  }

  private _filter(value: string): SkillModel[] {
    if(typeof(value) != "string") return this.skillService.allSkills
    return this.skillService.allSkills.filter(skill => skill.name.toLowerCase().includes(value.toLowerCase()));
  }

  openDialog(): void {
    import("src/app/core/components/add-skill-form/add-skill-form.module").then(m => m.AddSkillFormModule)
    const dialogRef = this.dialog.open(AddSkillFormComponent, {
      width: '350px',
      height: '450px',
    });
  }
}
