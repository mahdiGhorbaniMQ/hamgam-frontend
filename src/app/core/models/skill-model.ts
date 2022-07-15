import { CategoryModel } from "./category-model";
import { UserModel } from "./user-model";

export interface SkillModel {
    id?:number
    name?:string
    users?:UserModel[]
    image?:string
    categories?:CategoryModel[]
}
