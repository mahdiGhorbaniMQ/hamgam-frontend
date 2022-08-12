import { Injectable } from '@angular/core';
import { CategoryModel } from '../models/category-model';
import { CommentModel } from '../models/comment-model';
import { DocModel } from '../models/doc-model';
import { IdeaModel } from '../models/idea-model';
import { SkillModel } from '../models/skill-model';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class InformationService {


  comments:Map<number,CommentModel> = new Map()
  users:Map<number,UserModel> = new Map()
  ideas:Map<number,IdeaModel> = new Map()
  skills:Map<number,SkillModel> = new Map()
  categories:Map<number,CategoryModel> = new Map()
  docs:Map<number,DocModel> = new Map()

  constructor() {
  }

}
