import { SkillModel } from "./skill-model"
import { UserModel } from "./user-model"

export interface DocModel {
    id?:number
    date?:Date
    creator?:string
    slug?:string
    summery?:string
    number?:number
    content?:string
    skill?:SkillModel
}
