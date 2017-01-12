import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SkillService{
    constructor(private http: Http){
        console.log('Service work');
    }

    getSkills(){
        return this.http.get('/api/skills')
        .map(res => res.json());
    }

    addSkill(newSkill: any){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/skill', JSON.stringify(newSkill), {headers:headers})
        .map(res => res.json());
       
    }

    deleteSkill(id: any){
        return this.http.delete('api/skill/' + id)
        .map(res => res.json());
    }
}
