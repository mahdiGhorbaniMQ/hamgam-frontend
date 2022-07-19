import { IdeaModel } from "./idea-model";
import { UserModel } from "./user-model";

export interface CommentModel {
    id?:number
    user?:UserModel
    title?:String
    content:string
    date:Date,
    idea?:IdeaModel
}
