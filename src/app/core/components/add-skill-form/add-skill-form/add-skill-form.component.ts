import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryModel } from 'src/app/core/models/category-model';
import { SkillModel } from 'src/app/core/models/skill-model';
import { UserModel } from 'src/app/core/models/user-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { InformationService } from 'src/app/core/services/information.service';
import { SkillService } from 'src/app/core/services/skill.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-add-skill-form',
  templateUrl: './add-skill-form.component.html',
  styleUrls: ['./add-skill-form.component.scss']
})
export class AddSkillFormComponent implements OnInit {


  userInfo!:UserModel
  categories:CategoryModel[] = []
  selectedCategories:Set<CategoryModel> = new Set()

  image = new FormControl(null, []);


  nameFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
  });
  categoryFormGroup = this._formBuilder.group({
    category: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private snack:MatSnackBar,
    public theme:ThemeService,
    private skillService:SkillService,
    private informations:InformationService,
    private categoryService:CategoryService,
    private auth:AuthService,
    public dialogRef: MatDialogRef<AddSkillFormComponent>,
  ) {
    informations.categories.forEach(category => {
      this.categories.push(category)
    });
    this.userInfo = auth.userInfo!
  }

  ngOnInit(): void {
  }

  selectCategory(category:CategoryModel){
    if(this.selectedCategories.has(category))
      this.selectedCategories.delete(category)
    else
      this.selectedCategories.add(category)
  }


  @ViewChild('UploadFileInput') uploadFileInput!: ElementRef;
  myfilename = 'Select File';
  myfilesrc = '../../../../assets/logo.jpg';

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
  async create(){
    let cats:string[] = []
    this.selectedCategories.forEach(cat => {
      cats.push(""+cat.id!)
    });
    try{
      this.dialogRef.close();
      let data = await this.skillService.create(
        this.nameFormGroup.get("name")?.value,
        cats,
        this.image.value,
        this.userInfo.id!
      )
    } catch(err:any){
      console.log(err);
      this.snack.open(err.message,"ok!")
      setTimeout(() => {
        this.snack.dismiss
      }, 1500);
    }

  }
}
