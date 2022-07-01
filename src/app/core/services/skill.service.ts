import { Injectable } from '@angular/core';
import { SkillModel } from '../models/skill-model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  allSkills:SkillModel[] = []

  constructor() {}

  getAll():SkillModel[]{
    return this.allSkills
  }

  getByName(name:string):SkillModel{
    return this.allSkills.filter(skill=>skill.name==name)[0]
  }
  getByNames(names:string[]):SkillModel[]{
    return this.allSkills.filter(skill=>names.includes(skill.name))
  }
  getById(id:string):SkillModel{
    return this.allSkills.filter(skill=>skill.id == id)[0]
  }
  getByIds(ids:string[]):SkillModel[]{
    return this.allSkills.filter(skill=>ids.includes(skill.id!))
  }
  getByCategory(category:string):SkillModel[]{
    return this.allSkills.filter(skill=>skill.categories.includes(category))
  }
  getByCategories(categories:string[]):SkillModel[]{
    return this.allSkills.filter(skill=>this.has(skill.categories,categories))
  }
  create(skill:SkillModel){
    skill.id = this.allSkills.map(idea=>idea.id).map(id=>Number.parseInt(id!)).sort().reverse()[0]+1+"" 
    this.allSkills.push(skill)
  }
  update(skill:SkillModel){
    let index = this.allSkills.indexOf(this.getById(skill.id!))
    this.allSkills[index] = skill
  }
  delete(skill:SkillModel){
    let index = this.allSkills.indexOf(this.getById(skill.id!))
    this.allSkills = [...this.allSkills.slice(0,index),...this.allSkills.slice((index+1),(length-index-1))]
  }







  has(arr1:any[],arr2:any[]):boolean{
    let res = false
    arr2.forEach(item=>{
      if(arr1.includes(item)) res = true
    })
    return res
  }
}
