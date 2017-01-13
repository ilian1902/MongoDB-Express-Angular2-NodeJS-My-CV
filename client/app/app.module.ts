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

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, SkillsComponent, HomeComponent, AddSkillComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
