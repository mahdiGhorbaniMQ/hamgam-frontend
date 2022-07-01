import { Injectable } from '@angular/core';
import { RequestModel } from '../models/request-model';
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
    private ideas:IdeaService
  ) {


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
        user:users.getUserById("3")
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




    users.allUsers = [
      {
        id:"0",
        name:"مهدی قربانی",
        img:"../../../../../assets/profile.jpg",
        email:"mahdi.ghorbani.mqz@gmail.com",
        skills:skills.getByNames(["Java","Spring","NodeJs","Javascript","React","Angular","Linux"])
      },
      {
        id:"1",
        name:"علیرضا خرمی",
        img:"../../../../assets/profile2.jpg",
        email:"khoramism@gmail.com",
        skills:skills.getByNames(["Python","Django","Java","Linux"])
      },
      {
        id:"2",
        name:"ایمان صدق",
        img:"../../../../assets/profile2.jpg",
        email:"imansedgh@gmail.com",
        skills:skills.getByNames(["Python","Django","Java","Linux"])
      },
      {
        id:"3",
        name:"دارا صدری",
        img:"../../../../assets/profile2.jpg",
        email:"dara.sadri@gmail.com",
        skills:skills.getByNames(["Python","Django","Java"])
      },
      {
        id:"4",
        name:"میلاد تقی زاده",
        img:"../../../../assets/profile2.jpg",
        email:"milladTaghi@gmail.com",
        skills:skills.getByNames(["Java","Linux"])
      }
    ]



    skills.allSkills = [
      {
        id:"0",
        name:"Java",
        categories:["Backend"],
        users:users.getUsersBySkill("Java")
      },
      {
        id:"1",
        name:"Spring",
        categories:["Backend"],
        users:users.getUsersBySkill("Java")
      },
      {
        id:"2",
        name:"Python",
        categories:["Backend"],
        users:users.getUsersBySkill("Python")
      },
      {
        id:"3",
        name:"Django",
        categories:["Backend"],
        users:users.getUsersBySkill("Dgango")
      },
      {
        id:"4",
        name:"Angular",
        categories:["Frontetned"],
        users:users.getUsersBySkill("Angular")
      },
      {
        id:"5",
        name:"Node",
        categories:["Backend","Frontent"],
        users:users.getUsersBySkill("Node")
      },
      {
        id:"6",
        name:"Javascrpt",
        categories:["Backend","Frontent"],
        users:users.getUsersBySkill("Javascript")
      },
      {
        id:"7",
        name:"React",
        categories:["Frontent"],
        users:users.getUsersBySkill("React")
      },
      {
        id:"8",
        name:"Linux",
        categories:["Devops"],
        users:users.getUsersBySkill("Linux")
      },
    ]





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
        creator:users.getUserById("1"),
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
