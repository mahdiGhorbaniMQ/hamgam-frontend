import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './modules/bookmarks/bookmarks/bookmarks.component';
import { ExploreComponent } from './modules/explore/explore/explore.component';
import { HomeComponent } from './modules/home/home/home.component';
import { ListsComponent } from './modules/lists/lists/lists.component';
import { MessagesComponent } from './modules/messages/messages/messages.component';
import { NotFoundComponent } from './modules/not-found/not-found/not-found.component';
import { NotificationsComponent } from './modules/notifications/notifications/notifications.component';
import { ProfileComponent } from './modules/profile/profile/profile.component';
import { SomethingElseComponent } from './modules/something-else/something-else/something-else.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/profile",
    pathMatch:"full"
  },
  {
    path:"profile",
    component:ProfileComponent,
    loadChildren: ()=> import("src/app/modules/profile/profile.module").then(m => m.ProfileModule)
  },
  {
    path:"home",
    component:HomeComponent,
    loadChildren: ()=> import("src/app/modules/home/home.module").then(m => m.HomeModule)
  },
  {
    path:"explore",
    component:ExploreComponent,
    loadChildren: ()=> import("src/app/modules/explore/explore.module").then(m => m.ExploreModule)
  },
  {
    path:"bookmarks",
    component:BookmarksComponent,
    loadChildren: ()=> import("src/app/modules/bookmarks/bookmarks.module").then(m => m.BookmarksModule)
  },
  {
    path:"lists",
    component:ListsComponent,
    loadChildren: ()=> import("src/app/modules/lists/lists.module").then(m => m.ListsModule)
  },
  {
    path:"messages",
    component:MessagesComponent,
    loadChildren: ()=> import("src/app/modules/messages/messages.module").then(m => m.MessagesModule)
  },
  {
    path:"notifications",
    component:NotificationsComponent,
    loadChildren: ()=> import("src/app/modules/notifications/notifications.module").then(m => m.NotificationsModule)
  },
  {
    path:"lists",
    component:ListsComponent,
    loadChildren: ()=> import("src/app/modules/lists/lists.module").then(m => m.ListsModule)
  },
  {
    path:"other",
    component:SomethingElseComponent,
    loadChildren: ()=> import("src/app/modules/something-else/something-else.module").then(m => m.SomethingElseModule)
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
