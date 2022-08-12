import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DocModel } from '../models/doc-model';
import { InformationService } from './information.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor(    
    private loading:LoadingService,
    private http:HttpClient,
    private informations:InformationService
  ) {
    this.fillDocs()
  }

  async fillDocs(){
    this.http.get(environment.api+"/docs").subscribe(
      (data:any)=>{
        data.forEach(async (item:any) => {
          
          let doc:DocModel = {};

          if(this.informations.docs.has(item.id!)){
            doc = this.informations.docs.get(item.id)!
          }
          
          doc.id = item.id,
          doc.number = item.number,
          doc.creator = item.developed_by,
          doc.skill = this.getSkillRef(item.skill),
          doc.date = new Date(item.publish),
          doc.summery = item.summary,
          doc.slug = item.slug
          doc.content = item.content

          this.informations.docs.set(doc.id!,doc)           
          
        });
        this.loading.loaded.next("ideas")
      },
      err=>{}
    )
  }


  getUserRef(userData:any){    
    if(this.informations.users.has(userData.id)){
      let user = this.informations.users.get(userData.id)!
      user!.id = userData.id
      user!.email = userData.email
      user!.img = userData.avatar?userData.avatar:"/assets/no-prof.jpg"
      // user!.img = "/assets/no-prof.jpg"

      if(!user!.firstName)
        user.firstName = ""
      if(!user!.lastName)
        user!.lastName = ""

      return user
    }
    else{
      let user = {
        id: userData.id,
        email: userData.email,
        img: userData.avatar?userData.avatar:"/assets/no-prof.jpg",
        // img: "/assets/no-prof.jpg",
        firstName: "",
        lastName: ""
      }
      this.informations.users.set(user.id!,user)
      return this.informations.users.get(user.id!)!
    }
  }

  getSkillRef(skillId:any){

    if(this.informations.skills.has(skillId)){
      return this.informations.skills.get(skillId)! 
    }
    else{
      let skill = {
        id: skillId
      }
      this.informations.skills.set(skillId,skill)
      return this.informations.skills.get(skillId)!
    }
  }
}
