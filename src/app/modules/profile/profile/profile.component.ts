import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { IdeaModel } from 'src/app/core/models/idea-model';
import { SkillModel } from 'src/app/core/models/skill-model';
import { UserModel } from 'src/app/core/models/user-model';
import { AuthService } from 'src/app/core/services/auth.service';
import { IdeaService } from 'src/app/core/services/idea.service';
import { ThemeService } from 'src/app/core/services/theme.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userInfo!:UserModel
  isUserProf:boolean = true
  userIdeas:IdeaModel[] = []

  constructor(
    private navInfo:NavInformationService,
    private auth:AuthService,
    public theme:ThemeService,
    private userService:UserService,
    private rout:ActivatedRoute,
    private ideaService:IdeaService) { }

  ngOnInit(): void {
    this.navInfo.select(2)
    this.rout.paramMap.subscribe(data=>{
      let email = data.get("email")
      if(!email)
        this.userInfo = this.auth.userInfo
      else{
        this.userInfo = this.userService.getUserByemail(email)
        if(this.userInfo!=this.auth.userInfo)
          this.isUserProf = false
      }
      this.userIdeas = this.ideaService.allIdeas.filter(idea=>idea.creator == this.userInfo)
    })
  }

  @ViewChild('UploadFileInput') uploadFileInput!: ElementRef;
  myfilename = 'Select File';

  fileChangeEvent(fileInput: any) {

    if (fileInput.target.files && fileInput.target.files[0]) {


      this.myfilename = '';
      Array.from(fileInput.target.files).forEach((file: any) => {
        console.log(file);
        this.myfilename += file.name + ',';
      });

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {

          // Return Base64 Data URL
          const imgBase64Path = e.target.result;

        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);

      // Reset File Input to Selct Same file again
      this.uploadFileInput.nativeElement.value = "";
    } else {
      this.myfilename = 'Select File';
    }
  }

}
