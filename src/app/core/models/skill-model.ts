import { UserModel } from "./user-model";

export interface SkillModel {
    id?:string
    name:string,
    users:UserModel[]
    categories:string[]
}
