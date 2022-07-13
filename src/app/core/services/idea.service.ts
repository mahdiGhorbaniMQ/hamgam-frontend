import { Injectable } from '@angular/core';
import { IdeaModel } from '../models/idea-model';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  allIdeas:IdeaModel[] = []

  constructor() { }

  getById(id:string):IdeaModel{
    return this.allIdeas.filter(idea=>idea.id==id)[0]
  }
  getByIds(ids:string[]):IdeaModel[]{
    return this.allIdeas.filter(idea=>{
      return ids.includes(idea.id!)
    })
  }

  create(idea:IdeaModel){
    idea.id = this.allIdeas.map(idea=>idea.id).map(id=>Number.parseInt(id!)).sort().reverse()[0]+1+"" 
    this.allIdeas.push(idea)
  }
  update(idea:IdeaModel){
    let index = this.allIdeas.indexOf(this.getById(idea.id!))
    this.allIdeas[index] = idea
  }
  delete(idea:IdeaModel){
    let index = this.allIdeas.indexOf(this.getById(idea.id!))
    this.allIdeas = [...this.allIdeas.slice(0,index),...this.allIdeas.slice((index+1),(this.allIdeas.length-index))]
  }
}
