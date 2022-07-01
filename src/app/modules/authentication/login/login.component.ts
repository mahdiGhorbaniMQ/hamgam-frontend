import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavInformationService } from 'src/app/core/components/nav-bar/nav-information.service';
import { ScreenService } from 'src/app/core/services/screen.service';

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
    private navInfo:NavInformationService) { }

  ngOnInit(): void {
    this.navInfo.select(4)
  }


  getEmailError() {
    if (this.email.hasError('required')) {
      return 'You must enter an email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getPassError() {
    if (this.email.hasError('required')) {
      return 'You must enter a password';
    }
    return '';
  }
  
  login(){}
}
