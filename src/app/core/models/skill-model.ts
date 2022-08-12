import { CategoryModel } from "./category-model";
import { DocModel } from "./doc-model";
import { UserModel } from "./user-model";

export interface SkillModel {
    id?:number
    name?:string
    users?:UserModel[]
    image?:string
    categories?:CategoryModel[]
    docs?:DocModel[]
}
