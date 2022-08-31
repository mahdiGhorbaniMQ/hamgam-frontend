import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-change-pass-verify',
  templateUrl: './change-pass-verify.component.html',
  styleUrls: ['./change-pass-verify.component.scss']
})
export class ChangePassVerifyComponent implements OnInit {
  hidePass = true;
  password = new FormControl('', [Validators.required])
  key = new FormControl('', [Validators.required])
  formGroup = this._formBuilder.group({
    key: this.key,
    password: this.password
  });

  constructor(
    private loading:LoadingService,
    private _formBuilder: FormBuilder,
    public theme:ThemeService,
    private authService:AuthService,
    private router:Router,
    private rout:ActivatedRoute,
    private snack:MatSnackBar,
    private navInfo:NavInformationService
  ) {
    this.key.setValue(rout.snapshot.paramMap.get("token"))
  }

  ngOnInit(): void {
    this.navInfo.select(4)
  }

  getPassError() {
    if (this.password.hasError('required')) {
      return 'فیلد رمز عبور ضروری است';
    }
    return '';
  }
  
  async verify(){
    try{
      let logedin = await this.authService.changePass(this.key.value,this.password.value)
      if(logedin){
        this.loading.isLoading = false
        this.router.navigate(["/login"])
      }
    }catch(e:any){
      this.loading.isLoading = false  
      console.log(e);
          
      this.snack.open(e.error.password[2],"ok!")
      setTimeout(() => {
        this.snack.dismiss()
      }, 2500);
    }
  }
}
