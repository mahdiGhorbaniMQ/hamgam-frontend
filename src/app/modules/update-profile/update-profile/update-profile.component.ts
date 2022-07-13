import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
import { ThemeService } from 'src/app/core/services/theme.service';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('',[]);
  bio = new FormControl('', []);
  image = new FormControl('', []);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required])
  hidePass = true;
  formGroup = this._formBuilder.group({
    firstName: this.firstName,
    lastName: this.lastName,
    image: this.image,
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
    public theme:ThemeService,
    private _formBuilder: FormBuilder,
    private navInfo:NavInformationService,
    private skillService:SkillService,
     private dialog: MatDialog) {
    this.filteredSkills = this.skillCtrl.valueChanges.pipe(
      startWith(null),
      map((skillName: string) => (skillName ? this._filter(skillName) : skillService.allSkills.filter(skill=>!this.selectedSkills.has(skill)).slice())),
    );
  }
  ngOnInit(): void {
    this.navInfo.select(2)
  }

  getNameError(){
    if (this.email.hasError('required')) {
      return 'فیلد نام ضروری است';
    }

    return '';
  }
  getFamilyError(){
    if (this.email.hasError('required')) {
      return 'فیلد فامیلی ضروری است';
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
    if(typeof(value) != "string") return this.skillService.allSkills.filter(skill=>!this.selectedSkills.has(skill))
    return this.skillService.allSkills.filter(skill => {
      return skill.name.toLowerCase().includes(value.toLowerCase()) && !this.selectedSkills.has(skill)
    });
  }

  openDialog(): void {
    import("src/app/core/components/add-skill-form/add-skill-form.module").then(m => m.AddSkillFormModule)
    let options = {
      width: '350px',
      height: '450px',
      panelClass: ''
    }
    if(this.theme.dark) options.panelClass = 'dialog-dark'
    const dialogRef = this.dialog.open(AddSkillFormComponent,options);
  }

  @ViewChild('UploadFileInput') uploadFileInput!: ElementRef;
  myfilename = 'Select File';
  myfilesrc = '../../../../assets/no-prof.jpg';

  fileChangeEvent(fileInput: any) {

    if (fileInput.target.files && fileInput.target.files[0]) {

      
      this.myfilename = fileInput.target.files[0].name ;
      this.image.setValue( fileInput.target.files[0] )
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        this.myfilesrc = e.target.result
        
        image.onload = rs => {
          
          // Return Base64 Data URL
          const imgBase64Path = e.target.result;

        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
      

      // Reset File Input to Selct Same file again
      // this.uploadFileInput.nativeElement.value = "";
    } else {
      this.myfilename = 'Select File';
    }
  }
}
