import { DocModel } from "./doc-model";
import { SkillModel } from "./skill-model";

export interface UserModel {
    id?:number
    firstName?:string
    lastName?:string
    email?:string
    username?:string
    skills?:SkillModel[]
    img?:string
    bio?:string
    password?:string
    // docs?:DocModel[]
}
