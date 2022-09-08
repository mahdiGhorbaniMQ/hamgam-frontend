import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AddSkillFormComponent } from 'src/app/core/components/add-skill-form/add-skill-form/add-skill-form.component';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { SkillModel } from 'src/app/core/models/skill-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { InformationService } from 'src/app/core/services/information.service';
import { SkillService } from 'src/app/core/services/skill.service';
import { ThemeService } from 'src/app/core/services/theme.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  updated = false
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('',[]);
  bio = new FormControl('', []);
  image = new FormControl('', []);
  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl(this.auth.userInfo.email);
  password = new FormControl('', [Validators.required])
  hidePass = true;
  formGroup = this._formBuilder.group({
    first_name: this.firstName,
    last_name: this.lastName,
    avatar: this.image,
    bio: this.bio,
    username: this.username,
  });

  canExit() : boolean {
 
    if(this.formGroup.touched||this.skillCtrl.touched||this.updated){
      if (confirm("با خارج شدن از صفحه تغییرات اعمال شده از بین می‌رود، آیا مطمئنید؟")) {
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
  imgChecked = true


  @ViewChild('skillInput') skillInput!: ElementRef<HTMLInputElement>;
  constructor(
    private http:HttpClient,
    public theme:ThemeService,
    private _formBuilder: FormBuilder,
    private navInfo:NavInformationService,
    private snack:MatSnackBar,
    private informations:InformationService,
    private skillService:SkillService,
    private auth:AuthService,
    private router:Router,
    private dialog: MatDialog) {

      if(auth.userInfo.img)
      http.get(auth.userInfo.img, { responseType: 'blob' }).subscribe(img=>{
        var file = new File([img], "file_name", {lastModified: 1534584790000});
        this.image.setValue(file)
        this.imgChecked = true
        console.log(this.image.value);
        
      })
      else this.imgChecked = true


    this.filteredSkills = this.skillCtrl.valueChanges.pipe(
      startWith(null),
      map((skillName: string) => (skillName ? this._filter(skillName) : this.asArr(this.informations.skills).filter(skill=>!this.selectedSkills.has(skill)).slice())),
    )

    this.firstName.setValue(this.auth.userInfo.firstName)
    this.lastName.setValue(this.auth.userInfo.lastName)
    this.bio.setValue(this.auth.userInfo.bio)
    this.myfilesrc = this.auth.userInfo.img!
    auth.userInfo.skills?.forEach(skill=>{
      this.selectedSkills.add(skill)
    })
    //  '../../../../assets/no-prof.jpg';
    if(!this.auth.userInfo.firstName)
    setTimeout(() => {
      this.firstName.setValue(this.auth.userInfo.firstName)
      this.lastName.setValue(this.auth.userInfo.lastName)
      this.bio.setValue(this.auth.userInfo.bio)
      this.myfilesrc = this.auth.userInfo.img!
      auth.userInfo.skills?.forEach(skill=>{
        this.selectedSkills.add(skill)
      })
      //  '../../../../assets/no-prof.jpg';
  
    }, 1500);
  }

  asArr(map:Map<any,any>){
    let arr:any[] = []
    map.forEach((item:any,key:any)=>{
      arr.push(item)
    })
    return arr
  }
  ngOnInit(): void {
    this.navInfo.select(2)
  }

  getNameError(){
    if (this.email.hasError('required')) {
      return 'فیلد نام  کوچک ضروری است';
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
  
  async update(){
    
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token '+localStorage.getItem("token")
      })
    };

    let removedSkills:SkillModel[] = []
    this.auth.userInfo.skills?.forEach(skill=>{
      if(!this.selectedSkills.has(skill))
        removedSkills.push(skill)
      // else
        // this.selectedSkills.delete(skill)
    })

    this.selectedSkills.forEach(skill=>{
      let skillUsers = new Set(skill.users?.map(u=>u.id))
      skillUsers?.add(this.auth.userInfo.id)
      let users:any = []
      skillUsers.forEach(u=>{users.push(u)})
      this.http.put(environment.api+"/skills/"+skill.id+"/update",{
        name:skill.name,
        categories:skill.categories?.map(c=>c.id),
        users:users,
        ideas:[]
      },httpOptions).subscribe()
    })
    removedSkills.forEach(skill=>{
      let skillUsers = new Set(skill.users?.map(u=>u.id))
      skillUsers?.delete(this.auth.userInfo.id)
      let users:any = []
      skillUsers.forEach(user=>{users.push(user)})
      this.http.put(environment.api+"/skills/"+skill.id+"/update",{
        name:skill.name,
        categories:skill.categories?.map(c=>c.id),
        users:users,
        idea:[]
      },httpOptions).subscribe()
    })



    try {
      let formData = new FormData()

      for (let i in this.formGroup.value) {
        if (this.formGroup.value[i] instanceof Blob){  //  Check if key value is file
          formData.append(i, this.formGroup.value[i], this.formGroup.value[i].name ? this.formGroup.value[i].name : "");
        }
        else
        formData.append(i, this.formGroup.value[i]);
      }


      let registerd = await this.auth.update(formData,this.auth.userInfo.id)
      if(registerd){
        this.auth.fillUserInfo()
        this.updated = true
        this.router.navigate(["/"])
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
      if (fileInput.target.files[0].size / 1024 / 1024 > 2) {
        alert("سایز عکس باید کمتر از 2 مگابایت باشد!")
        return;
      }
      
      this.myfilename = fileInput.target.files[0].name ;
      this.image.setValue( fileInput.target.files[0] )
      // console.log(this.image.value);
      
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        this.myfilesrc = e.target.result
        // this.image.setValue( e.target.result )
        // console.log(e );
        
        
        // image.onload = rs => {
          
        //   // Return Base64 Data URL
        //   const imgBase64Path = e.target.result;
        //   console.log(this.image.value);
          

        // };
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
