import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryModel } from 'src/app/core/models/category-model';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-add-skill-form',
  templateUrl: './add-skill-form.component.html',
  styleUrls: ['./add-skill-form.component.scss']
})
export class AddSkillFormComponent implements OnInit {


  categories:CategoryModel[] = []
  selectedCategories:Set<CategoryModel> = new Set()

  nameFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
  });
  categoryFormGroup = this._formBuilder.group({
    category: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder, private snack:MatSnackBar,private categoryService:CategoryService) {
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
}
