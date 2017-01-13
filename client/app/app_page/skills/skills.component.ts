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
    title: string;
    rate: number;

    constructor(private skillService: SkillService){
        this.skillService.getSkills()
        .subscribe(skills => this.skills = skills);
    }

        // addSkill(event:any){
        //     event.preventDefault();
        //     let newSkill = {
        //         title : this.title,
        //         rate: this.rate
        //     }
        //     this.skillService.addSkill(newSkill)
        //     .subscribe(skill => {
        //         this.skills.push(skill);
        //         this.title = '';
        //         this.rate = null;
        //     })
        // }

        // deleteSkill(id:any){
        //     let skills = this.skills;
        //     this.skillService.deleteSkill(id)
        //     .subscribe(data => {
        //         if(data.n == 1){
        //             for(let i = 0; i < skills.length; i++){
        //                 if(skills[i]._id == id){
        //                     skills.splice(i, 1);
        //                 }
        //             }
        //         }
        //     })
        // }
}