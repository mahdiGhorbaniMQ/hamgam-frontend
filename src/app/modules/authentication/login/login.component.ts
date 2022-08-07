import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { ScreenService } from 'src/app/core/services/screen.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required])
  hidePass = true;
  formGroup = this._formBuilder.group({
    email: this.email,
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
  ) { }

  ngOnInit(): void {
    this.navInfo.select(4)
    if(this.rout.snapshot.paramMap.has("logedout")){
      if(confirm("آیا از خروج از حسابتان مطمئنید؟")){
        this.authService.logout()
      }else{
        this.router.navigate(['/'])
      }
    }
  }


  getEmailError() {
    if (this.email.hasError('required')) {
      return 'فیلد ایمیل ضروری است';
    }

    return this.email.hasError('email') ? 'ایمیل معتبر نیست' : '';
  }
  getPassError() {
    if (this.email.hasError('required')) {
      return 'فیلد رمز عبور ضروری است';
    }
    return '';
  }
  
  async login(){
    try{
      let logedin = await this.authService.login(this.email.value,this.password.value)
      if(logedin){
        this.loading.isLoading = false
        this.router.navigate(["/"])
      }
    }catch(e){
      this.loading.isLoading = false
      this.snack.open("ایمیل و پسورد همخوانی ندارند","ok!")
      setTimeout(() => {
        this.snack.dismiss()
      }, 1500);
    }
  }
}
