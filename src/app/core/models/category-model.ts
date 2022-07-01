import { SkillModel } from "./skill-model";

export interface CategoryModel {
    id?:string
    name:string
    skills:SkillModel[]
}
