import { CommentModel } from "./comment-model";
import { SkillModel } from "./skill-model";
import { UserModel } from "./user-model";

export interface IdeaModel {
    id?:string
    title:string
    content:string
    date:Date
    creator:UserModel
    skills:SkillModel[]
    subscribers:UserModel[]
    likes:UserModel[]
    comments:CommentModel[]
}
