import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AuthGuardService } from './app_core/services/auth-guard.service';

import { AppComponent } from './app.component';
//import { RegisterComponent } from './app_pages/register/register.component';
//import { LoginComponent } from './app_pages/login/login.component';
import { HomeComponent } from './app_page/home/home.component';
//import { AboutComponent } from './app_pages/about/about.component';
//import { AdventuresComponent } from './app_pages/adventures/adventures.component';
import { SkillsComponent } from './app_page/skills/skills.component';
import { AddSkillComponent } from './app_page/skills/add-skill.component';
//import { UsersComponent } from './app_pages/users/users.component';
//import { UserProfileComponent } from './app_pages/user-profile/user-profile.component';
//import { NotFoundComponent } from './app_pages/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'register', component: RegisterComponent },
  //{ path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  //{ path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent},//, canActivate: [AuthGuardService] },
  { path: 'skill/create', component: AddSkillComponent}//, canActivate: [AuthGuardService] },
  //{ path: 'adventures/:id', component: AdventureComponent, canActivate: [AuthGuardService] },  
  //{ path: 'users', component: UsersComponent, canActivate: [AuthGuardService] },
 // { path: 'users/:id', component: UserProfileComponent, canActivate: [AuthGuardService] },  

  // otherwise Not Found  
  //{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }