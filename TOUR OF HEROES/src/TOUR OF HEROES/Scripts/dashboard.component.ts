import {Component, OnInit} from 'angular2/core';
import {HeroService} from './services/hero.service'
import {Hero} from './models/hero'
import { Router } from 'angular2/router';
@Component({
    selector: 'dashboard',
    templateUrl: '/app/views/dashboard.html',
    styleUrls :['app/content/css/dashboard.css']
    
})

export class DashboardComponent implements OnInit {
    constructor(private _heroService: HeroService, private _router: Router) {
    }
    ngOnInit() {
        this._heroService.getTopHeroes(4).then(list=> this.heroes = list);
    }
    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);  
    }
    heroes: Hero[] =[]
}
