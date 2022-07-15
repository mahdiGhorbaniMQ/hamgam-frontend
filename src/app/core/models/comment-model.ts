import { UserModel } from "./user-model";

export interface CommentModel {
    id?:number
    user?:UserModel
    content:string
    date:Date
}
