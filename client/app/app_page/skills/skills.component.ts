import { Component } from '@angular/core';
import { SkillService } from '../../app_core/services/skill.service';
import { SkillModel } from '../../app_core/models/skill.model';

@Component({
  moduleId: module.id,
  selector: 'skills',
  templateUrl: './skills.component.html',
})
export class SkillsComponent  {
    skills: SkillModel[];
    constructor(private skillService: SkillService){
        this.skillService.getSkills()
        .subscribe(skills => this.skills = skills);
    }

    
}