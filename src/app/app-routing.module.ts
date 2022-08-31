import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found/not-found.component';
import { HomeComponent } from './modules/home/home/home.component';
import { ProfileComponent } from './modules/profile/profile/profile.component';
import { CreateIdeaComponent } from './modules/create-idea/create-idea/create-idea.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { CommunityComponent } from './modules/community/community/community.component';
import { IdeaComponent } from './modules/idea/idea/idea.component';
import { UpdateProfileComponent } from './modules/update-profile/update-profile/update-profile.component';
import { UpdateIdeaComponent } from './modules/update-idea/update-idea/update-idea.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DeactivateGuard } from './core/guards/deactivate.guard';
import { DocComponent } from './modules/doc/doc/doc.component';
import { ChangePassVerifyComponent } from './modules/authentication/change-pass-verify/change-pass-verify.component';
import { VerifyEmailComponent } from './modules/authentication/verify-email/verify-email.component';
import { ChangePassReqComponent } from './modules/authentication/change-pass-req/change-pass-req.component';
import { ResendVerifyComponent } from './modules/authentication/resend-verify/resend-verify.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"
  },
  {
    path:"profile",
    component:ProfileComponent,
    canActivate:[AuthGuard],
    loadChildren: ()=> import("src/app/modules/profile/profile.module").then(m => m.ProfileModule)
  },
  {
    path:"profile/update",
    component:UpdateProfileComponent,
    canActivate:[AuthGuard],
    canDeactivate:[DeactivateGuard],
    loadChildren: ()=> import("src/app/modules/update-profile/update-profile.module").then(m => m.UpdateProfileModule)
  },
  {
    path:"profile/:id",
    component:ProfileComponent,
    loadChildren: ()=> import("src/app/modules/profile/profile.module").then(m => m.ProfileModule)
  },
  {
    path:"home",
    component:HomeComponent,
    loadChildren: ()=> import("src/app/modules/home/home.module").then(m => m.HomeModule)
  },
  {
    path:"idea",
    component:CreateIdeaComponent,
    // canActivate:[AuthGuard],
    canDeactivate:[DeactivateGuard],
    loadChildren: ()=> import("src/app/modules/create-idea/create-idea.module").then(m => m.CreateIdeaModule)
  },
  {
    path:"idea/:id/update",
    component:UpdateIdeaComponent,
    canActivate:[AuthGuard],
    canDeactivate:[DeactivateGuard],
    loadChildren: ()=> import("src/app/modules/update-idea/update-idea.module").then(m => m.UpdateIdeaModule)
  },
  {
    path:"idea/:id/:comments",
    component:IdeaComponent,
    loadChildren: ()=> import("src/app/modules/idea/idea.module").then(m => m.IdeaModule)
  },
  {
    path:"idea/:id",
    component:IdeaComponent,
    loadChildren: ()=> import("src/app/modules/idea/idea.module").then(m => m.IdeaModule)
  },
  {
    path:"login",
    component:LoginComponent,
    loadChildren: ()=> import("src/app/modules/authentication/authentication.module").then(m => m.AuthenticationModule)
  },
  {
    path:"login/:logedout",
    component:LoginComponent,
    loadChildren: ()=> import("src/app/modules/authentication/authentication.module").then(m => m.AuthenticationModule)
  },
  {
    path:"register",
    component:RegisterComponent,
    canDeactivate:[DeactivateGuard],
    loadChildren: ()=> import("src/app/modules/authentication/authentication.module").then(m => m.AuthenticationModule)
  },
  {
    path:"reset-password/:token",
    component:ChangePassVerifyComponent,
    loadChildren: ()=> import("src/app/modules/authentication/authentication.module").then(m => m.AuthenticationModule)
  },
  {
    path:"verify/:token",
    component:VerifyEmailComponent,
    loadChildren: ()=> import("src/app/modules/authentication/authentication.module").then(m => m.AuthenticationModule)
  },
  {
    path:"reset-password",
    component:ChangePassReqComponent,
    loadChildren: ()=> import("src/app/modules/authentication/authentication.module").then(m => m.AuthenticationModule)
  },
  {
    path:"verify",
    component:ResendVerifyComponent,
    loadChildren: ()=> import("src/app/modules/authentication/authentication.module").then(m => m.AuthenticationModule)
  },
  {
    path:"skills",
    component:CommunityComponent,
    loadChildren: ()=> import("src/app/modules/community/community.module").then(m => m.CommunityModule)
  },
  {
    path:"doc/:skill",
    component:DocComponent,
    loadChildren: ()=> import("src/app/modules/doc/doc.module").then(m => m.DocModule)
  },
  {
    path:"doc/:skill/:number",
    component:DocComponent,
    loadChildren: ()=> import("src/app/modules/doc/doc.module").then(m => m.DocModule)
  },
  {
    path:"**",
    component:NotFoundComponent,
    loadChildren: ()=> import("src/app/modules/not-found/not-found.module").then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
