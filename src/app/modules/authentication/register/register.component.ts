import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { SkillModel } from 'src/app/core/models/skill-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { InformationService } from 'src/app/core/services/information.service';
import { SkillService } from 'src/app/core/services/skill.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('',[]);
  image = new FormControl(null, []);
  bio = new FormControl('', []);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required])
  hidePass = true;

  formGroup = this._formBuilder.group({
    firstName: this.firstName,
    lastName: this.lastName,
    // image: this.image,
    // bio: this.bio,
    email: this.email,
    password: this.password
  });

  canExit() : boolean {
 
    if((this.formGroup.touched)){
      if (confirm("با خارج شدن از صفحه اطلاعات وارد شده از بین می‌رود، آیا مطمئنید؟")) {
        return true
      } else {
        return false
      }
    }
    return true
  }

  separatorKeysCodes: number[] = [ENTER, COMMA];
  skillCtrl = new FormControl('');
  filteredSkills!: Observable<SkillModel[]>;  
  selectedSkills: Set<SkillModel> = new Set()

  @ViewChild('skillInput') skillInput!: ElementRef<HTMLInputElement>;
  constructor(
    private _formBuilder: FormBuilder,
    private navInfo:NavInformationService,
    private authService:AuthService,
    public theme:ThemeService,
    private router:Router,
    private snack:MatSnackBar,
    private skillService:SkillService,
    private informations:InformationService,
     private dialog: MatDialog) {
    this.filteredSkills = this.skillCtrl.valueChanges.pipe(
      startWith(null),
      map((skillName: string) => (skillName ? this._filter(skillName) : this.asArr(this.informations.skills).filter(skill=>!this.selectedSkills.has(skill)).slice())),
    )
  }

  asArr(map:Map<any,any>){
    let arr:any[] = []
    map.forEach((item:any,key:any)=>{
      arr.push(item)
    })
    return arr
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
  getFamilyError(){
    if (this.email.hasError('required')) {
      return 'فیلد نام خانوادگی ضروری است';
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
  
  async register(){
    try {
      // let skills:SkillModel[] = []
      // this.selectedSkills.forEach(skill=>{skills.push(skill)})

      let registerd = await this.authService.register({
        firstName:this.firstName.value,
        lastName:this.lastName.value,
        email:this.email.value,
        password:this.password.value,
      })
      if(registerd){
        this.snack.open("تاییدیه به ایمیل شما ارسال شد","ok!")
        setTimeout(() => {
          this.snack.dismiss()
        }, 2500);
        this.router.navigate(["/login"])
      } 
    } catch (err:any) {
      this.snack.open(err.message,"ok!")
      setTimeout(() => {
        this.snack.dismiss
      }, 1500);
    }
  }


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
    if(typeof(value) != "string") return this.asArr(this.informations.skills).filter(skill=>!this.selectedSkills.has(skill))
    return this.asArr(this.informations.skills).filter(skill => {
      return skill.name!.toLowerCase().includes(value.toLowerCase()) && !this.selectedSkills.has(skill)
    });
  }

  // openDialog(): void {
  //   import("src/app/core/components/add-skill-form/add-skill-form.module").then(m => m.AddSkillFormModule)
  //   const dialogRef = this.dialog.open(AddSkillFormComponent, {
  //     width: '350px',
  //     height: '450px',
  //   });
  // }

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

  selectSearch(){
    this.filteredSkills =new BehaviorSubject(this.skillCtrl.value ? this._filter(this.skillCtrl.value) : this.asArr(this.informations.skills).filter(skill=>!this.selectedSkills.has(skill)).slice())
    this.filteredSkills = this.skillCtrl.valueChanges.pipe(
      startWith(null),
      map((skillName: string) => (this.skillCtrl.value ? this._filter(this.skillCtrl.value) : this.asArr(this.informations.skills).filter(skill=>!this.selectedSkills.has(skill)).slice())),
    );
  }
}
