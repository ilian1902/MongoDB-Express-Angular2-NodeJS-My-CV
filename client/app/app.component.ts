import { Component } from '@angular/core';
import { SkillService } from './app_core/services/skill.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SkillService]
})
export class AppComponent  {

}
