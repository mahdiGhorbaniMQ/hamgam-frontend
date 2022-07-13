import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryModel } from 'src/app/core/models/category-model';
import { CategoryService } from 'src/app/core/services/category.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-add-skill-form',
  templateUrl: './add-skill-form.component.html',
  styleUrls: ['./add-skill-form.component.scss']
})
export class AddSkillFormComponent implements OnInit {


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
    private categoryService:CategoryService
  ) {
    this.categories = this.categoryService.allCategories    
  }

  ngOnInit(): void {
  }

  selectCategory(category:CategoryModel){
    if(this.selectedCategories.has(category))
      this.selectedCategories.delete(category)
    else
      this.selectedCategories.add(category)
    this.snack.open("An error exists!","ok!")
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
}
