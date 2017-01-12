import { Component } from '@angular/core';
import { SkillService } from './app_core/services/skill.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [SkillService]
})
export class AppComponent  {

}
