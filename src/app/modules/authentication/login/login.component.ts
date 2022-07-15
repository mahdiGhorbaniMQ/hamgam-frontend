import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { AuthService } from 'src/app/core/services/auth.service';
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
    private _formBuilder: FormBuilder,
    public theme:ThemeService,
    private authService:AuthService,
    private router:Router,
    private snack:MatSnackBar,
    private navInfo:NavInformationService) { }

  ngOnInit(): void {
    this.navInfo.select(4)
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
      if(logedin) this.router.navigate(["/"])
    }catch(e){
      this.snack.open("ایمیل . پسورد همخوانی ندارند!","ok!")
    }
  }
}
