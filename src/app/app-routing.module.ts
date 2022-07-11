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
    loadChildren: ()=> import("src/app/modules/update-profile/update-profile.module").then(m => m.UpdateProfileModule)
  },
  {
    path:"profile/:email",
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
    canActivate:[AuthGuard],
    loadChildren: ()=> import("src/app/modules/create-idea/create-idea.module").then(m => m.CreateIdeaModule)
  },
  {
    path:"idea/:id/update",
    component:UpdateIdeaComponent,
    canActivate:[AuthGuard],
    loadChildren: ()=> import("src/app/modules/update-idea/update-idea.module").then(m => m.UpdateIdeaModule)
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
    path:"register",
    component:RegisterComponent,
    loadChildren: ()=> import("src/app/modules/authentication/authentication.module").then(m => m.AuthenticationModule)
  },
  {
    path:"community",
    component:CommunityComponent,
    loadChildren: ()=> import("src/app/modules/community/community.module").then(m => m.CommunityModule)
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
