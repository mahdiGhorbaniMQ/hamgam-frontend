import { Injectable } from '@angular/core';
import { CategoryModel } from '../models/category-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  allCategories:CategoryModel[] = []
  constructor() { }

  getByName(name:string):CategoryModel{
    return this.allCategories.filter(cat=>cat.name==name)[0]
  }
  getByNames(names:string[]):CategoryModel[]{
    return this.allCategories.filter(cat=>names.includes(cat.name))
  }

}
