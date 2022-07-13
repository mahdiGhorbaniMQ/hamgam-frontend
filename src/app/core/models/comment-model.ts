import { IdeaModel } from "./idea-model";
import { UserModel } from "./user-model";

export interface CommentModel {
    id?:string
    user:UserModel
    content:string
    date:Date
}
