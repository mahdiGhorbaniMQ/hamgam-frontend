import { UserModel } from "./user-model";

export interface RequestModel {
    id?:string
    user:UserModel
    content:string
    resume:string
}
