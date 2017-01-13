import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Routing
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { SkillsComponent } from './app_page/skills/skills.component';
import { HomeComponent } from './app_page/home/home.component';
import { AddSkillComponent } from './app_page/skills/add-skill.component';
import { AuthGuardService } from './app_core/services/auth-guard.service';
import { LoginComponent } from './app_page/login/login.component';
import { AuthenticationService } from './app_core/services/authentication.service';
import { UserService } from './app_core/services/user.service';

@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, SkillsComponent, HomeComponent, AddSkillComponent, LoginComponent ],
  providers: [ AuthGuardService, AuthenticationService, UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
