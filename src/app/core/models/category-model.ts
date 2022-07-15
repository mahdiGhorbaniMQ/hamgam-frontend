import { SkillModel } from "./skill-model";

export interface CategoryModel {
    id?:number
    name:string
    skills?:SkillModel[]
}
