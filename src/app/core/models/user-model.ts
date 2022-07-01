import { SkillModel } from "./skill-model";

export interface UserModel {
    id?:string
    name:string
    email:string
    skills:SkillModel[]
    img?:string
    bio?:string
    connections?:string
    passsword?:string
}
