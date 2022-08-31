import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-change-pass-req',
  templateUrl: './change-pass-req.component.html',
  styleUrls: ['./change-pass-req.component.scss']
})
export class ChangePassReqComponent implements OnInit {


  email = new FormControl('', [Validators.required, Validators.email]);
  formGroup = this._formBuilder.group({
    email: this.email,
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
  ) { }

  ngOnInit(): void {
    this.navInfo.select(4)
  }


  getEmailError() {
    if (this.email.hasError('required')) {
      return 'فیلد ایمیل ضروری است';
    }

    return this.email.hasError('email') ? 'ایمیل معتبر نیست' : '';
  }  
  async send(){
    try{
      let logedin = await this.authService.changePassReq(this.email.value)
      if(logedin){
        this.loading.isLoading = false
        this.snack.open("لینک تغییر رمز عبور به ایمیل شما ارسال شد","ok!")
        setTimeout(() => {
          this.snack.dismiss()
        }, 2500);
        this.router.navigate(["/login"])
      }
    }catch(e){
      this.loading.isLoading = false
      this.snack.open("خطایی رخ داده است","ok!")
      setTimeout(() => {
        this.snack.dismiss()
      }, 2500);
    }
  }

}
