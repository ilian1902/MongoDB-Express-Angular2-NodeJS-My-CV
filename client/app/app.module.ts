import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SkillsComponent } from './app_page/skills/skills.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SkillsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
