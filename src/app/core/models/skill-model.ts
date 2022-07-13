import { CategoryModel } from "./category-model";
import { UserModel } from "./user-model";

export interface SkillModel {
    id?:string
    name:string
    users:UserModel[]
    image?:string
    categories:CategoryModel[]
}
