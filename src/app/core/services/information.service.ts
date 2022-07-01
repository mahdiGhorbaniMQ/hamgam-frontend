import { Injectable } from '@angular/core';
import { RequestModel } from '../models/request-model';
import { CategoryService } from './category.service';
import { IdeaService } from './idea.service';
import { SkillService } from './skill.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class InformationService {


  requests:RequestModel[] = []

  constructor(
    private users:UserService,
    private skills:SkillService,
    private ideas:IdeaService,
    private categories:CategoryService
  ) {


    users.allUsers = [
      {
        id:"0",
        name:"مهدی قربانی",
        img:"../../../../../assets/profile.jpg",
        email:"mahdi.ghorbani.mqz@gmail.com",
        skills:[]
      },
      {
        id:"1",
        name:"علیرضا خرمی",
        img:"../../../../assets/profile2.jpg",
        email:"khoramism@gmail.com",
        skills:[]
      },
      {
        id:"2",
        name:"ایمان صدق",
        img:"../../../../assets/profile2.jpg",
        email:"imansedgh@gmail.com",
        skills:[]
      },
      {
        id:"3",
        name:"دارا صدری",
        img:"../../../../assets/profile2.jpg",
        email:"dara.sadri@gmail.com",
        skills:[]
      },
      {
        id:"4",
        name:"میلاد تقی زاده",
        img:"../../../../assets/profile2.jpg",
        email:"milladTaghi@gmail.com",
        skills:[]
      }
    ]




    this.requests = [
      {
        id:"0",
        content:"سلام این یک متن درخواست برای ایده شما هستش تا با دیدنش مهارت های من را ببینید و از طریق اطلاعات تماسم با من تماس بگیرید",
        resume:"test",
        user:users.getUserById("3")
      },
      {
        id:"1",
        content:"سلام این یک متن درخواست برای ایده شما هستش تا با دیدنش مهارت های من را ببینید و از طریق اطلاعات تماسم با من تماس بگیرید",
        resume:"test",
        user:users.getUserById("0")
      },
      {
        id:"2",
        content:"سلام این یک متن درخواست برای ایده شما هستش تا با دیدنش مهارت های من را ببینید و از طریق اطلاعات تماسم با من تماس بگیرید",
        resume:"test",
        user:users.getUserById("1")
      },
      {
        id:"3",
        content:"سلام این یک متن درخواست برای ایده شما هستش تا با دیدنش مهارت های من را ببینید و از طریق اطلاعات تماسم با من تماس بگیرید",
        resume:"test",
        user:users.getUserById("3")
      },
      {
        id:"4",
        content:"سلام این یک متن درخواست برای ایده شما هستش تا با دیدنش مهارت های من را ببینید و از طریق اطلاعات تماسم با من تماس بگیرید",
        resume:"test",
        user:users.getUserById("2")
      },
      {
        id:"5",
        content:"سلام این یک متن درخواست برای ایده شما هستش تا با دیدنش مهارت های من را ببینید و از طریق اطلاعات تماسم با من تماس بگیرید",
        resume:"test",
        user:users.getUserById("4")
      },
    ]

    
    skills.allSkills = [
      {
        id:"0",
        name:"Java",
        categories:[],
        users:[]
      },
      {
        id:"1",
        name:"Spring",
        categories:[],
        users:[]
      },
      {
        id:"2",
        name:"Python",
        categories:[],
        users:[]
      },
      {
        id:"3",
        name:"Django",
        categories:[],
        users:[]
      },
      {
        id:"4",
        name:"Angular",
        categories:[],
        users:[]
      },
      {
        id:"5",
        name:"Node",
        categories:[],
        users:[]
      },
      {
        id:"6",
        name:"Javascript",
        categories:[],
        users:[]
      },
      {
        id:"7",
        name:"React",
        categories:[],
        users:[]
      },
      {
        id:"8",
        name:"Linux",
        categories:[],
        users:[]
      },
    ]


    users.allUsers[0].skills = skills.getByNames(["Java","Spring","Angular","Linux"])
    users.allUsers[1].skills = skills.getByNames(["Python","Django","Java","Linux"])
    users.allUsers[2].skills = skills.getByNames(["Python","Django","Java","Linux"])
    users.allUsers[3].skills = skills.getByNames(["Python","Django","Java"])
    users.allUsers[4].skills = skills.getByNames(["Java","Linux"])



    skills.allSkills.forEach(skill=>{
      skill.users = users.getUsersBySkill(skill.name)
    })


    categories.allCategories = [
      {
        id:"1",
        name:"Backend",
        skills:[]
      },
      {
        id:"2",
        name:"Frontend",
        skills:[]
      },
      {
        id:"3",
        name:"Devops",
        skills:[]
      },
    ]


    skills.allSkills[0].categories = categories.getByNames(["Backend"])
    skills.allSkills[1].categories = categories.getByNames(["Backend"])
    skills.allSkills[2].categories = categories.getByNames(["Backend"])
    skills.allSkills[3].categories = categories.getByNames(["Backend"])
    skills.allSkills[4].categories = categories.getByNames(["Frontend"])
    skills.allSkills[5].categories = categories.getByNames(["Frontend","Backend"])
    skills.allSkills[6].categories = categories.getByNames(["Frontend","Backend"])
    skills.allSkills[7].categories = categories.getByNames(["Frontend"])
    skills.allSkills[8].categories = categories.getByNames(["Devops"])


    ideas.allIdeas = [
      {
        id:"0",
        title:"سلام این اولین ایده من هستش.",
        content:`این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است`,
        creator:users.getUserById("0"),
        date:new Date(),
        likes:users.getUsersByIds(["0","1","2","4"]),
        requests:this.requests,
        skills:skills.getByNames(["Java","Spring","Angular"]),
        subscribers:users.getUsersByIds(["0","1"])
      },
      {
        id:"1",
        title:"سلام این اولین ایده من هستش.",
        content:`این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است`,
        creator:users.getUserById("1"),
        date:new Date(),
        likes:users.getUsersByIds(["0","1","2","4"]),
        requests:this.requests,
        skills:skills.getByNames(["Java","Spring","Angular"]),
        subscribers:users.getUsersByIds(["0","1"])
      },
      {
        id:"2",
        title:"سلام این اولین ایده من هستش.",
        content:`این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است`,
        creator:users.getUserById("1"),
        date:new Date(),
        likes:users.getUsersByIds(["0","1","2","4"]),
        requests:this.requests,
        skills:skills.getByNames(["Java","Spring","Angular"]),
        subscribers:users.getUsersByIds(["0","1"])
      },
      {
        id:"3",
        title:"سلام این اولین ایده من هستش.",
        content:`این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است`,
        creator:users.getUserById("1"),
        date:new Date(),
        likes:users.getUsersByIds(["0","1","2","4"]),
        requests:this.requests,
        skills:skills.getByNames(["Java","Spring","Angular"]),
        subscribers:users.getUsersByIds(["0","1"])
      },
      {
        id:"4",
        title:"سلام این اولین ایده من هستش.",
        content:`این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است`,
        creator:users.getUserById("1"),
        date:new Date(),
        likes:users.getUsersByIds(["0","1","2","4"]),
        requests:this.requests,
        skills:skills.getByNames(["Java","Spring","Angular"]),
        subscribers:users.getUsersByIds(["0","1"])
      },
      {
        id:"5",
        title:"سلام این اولین ایده من هستش.",
        content:`این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است`,
        creator:users.getUserById("1"),
        date:new Date(),
        likes:users.getUsersByIds(["0","1","2","4"]),
        requests:this.requests,
        skills:skills.getByNames(["Java","Spring","Angular"]),
        subscribers:users.getUsersByIds(["0","1"])
      },
      {
        id:"6",
        title:"سلام این اولین ایده من هستش.",
        content:`این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است`,
        creator:users.getUserById("1"),
        date:new Date(),
        likes:users.getUsersByIds(["0","1","2","4"]),
        requests:this.requests,
        skills:skills.getByNames(["Java","Spring","Angular"]),
        subscribers:users.getUsersByIds(["0","1"])
      },
      {
        id:"7",
        title:"سلام این اولین ایده من هستش.",
        content:`این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است`,
        creator:users.getUserById("1"),
        date:new Date(),
        likes:users.getUsersByIds(["0","1","2","4"]),
        requests:this.requests,
        skills:skills.getByNames(["Java","Spring","Angular"]),
        subscribers:users.getUsersByIds(["0","1"])
      },
      {
        id:"8",
        title:"سلام این اولین ایده من هستش.",
        content:`این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است`,
        creator:users.getUserById("1"),
        date:new Date(),
        likes:users.getUsersByIds(["0","1","2","4"]),
        requests:this.requests,
        skills:skills.getByNames(["Java","Spring","Angular"]),
        subscribers:users.getUsersByIds(["0","1"])
      },
      {
        id:"9",
        title:"سلام این اولین ایده من هستش.",
        content:`این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است`,
        creator:users.getUserById("1"),
        date:new Date(),
        likes:users.getUsersByIds(["0","1","2","4"]),
        requests:this.requests,
        skills:skills.getByNames(["Java","Spring","Angular"]),
        subscribers:users.getUsersByIds(["0","1"])
      },
      {
        id:"10",
        title:"سلام این اولین ایده من هستش.",
        content:`این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است
        این یک متن طولانی است این یک متن طولانی است`,
        creator:users.getUserById("1"),
        date:new Date(),
        likes:users.getUsersByIds(["0","1","2","4"]),
        requests:this.requests,
        skills:skills.getByNames(["Java","Spring","Angular"]),
        subscribers:users.getUsersByIds(["0","1"])
      },
    ]

  }
}
