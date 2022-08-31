import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AngularMaterialModule } from 'src/app/core/share/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ChangePassReqComponent } from './change-pass-req/change-pass-req.component';
import { ChangePassVerifyComponent } from './change-pass-verify/change-pass-verify.component';
import { ResendVerifyComponent } from './resend-verify/resend-verify.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    VerifyEmailComponent,
    ChangePassReqComponent,
    ChangePassVerifyComponent,
    ResendVerifyComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    ChangePassReqComponent,
    VerifyEmailComponent,
    ResendVerifyComponent,
    ChangePassVerifyComponent
  ]
})
export class AuthenticationModule { }
