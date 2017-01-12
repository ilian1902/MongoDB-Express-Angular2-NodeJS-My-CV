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
}
