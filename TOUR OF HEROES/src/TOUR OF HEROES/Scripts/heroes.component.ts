import {Component} from 'angular2/core';
import { Router } from 'angular2/router';
import {Hero} from './models/hero';
import {HeroDetailComponent} from './hero-detail.component';
import {OnInit} from 'angular2/core';
import { HeroService }     from './services/hero.service';

@Component({
    selector: 'heroes-list',
    templateUrl: '/app/views/hero-list.html',
    styleUrls: ['app/content/css/hero-list.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
    ngOnInit() {
        this.getHeroes();
    }
    constructor(private _heroService: HeroService, private _router: Router) {
    }

    title: string = 'My AngularJS Application'

    heroes: Hero[]
    selectedHero: Hero
    onSelect(h: Hero) {
        this.selectedHero = h;
    }
    gotoDetail() {
        let link = ['HeroDetail', { id: this.selectedHero.id }];
        this._router.navigate(link);
    }

    getHeroes()
    {
        this._heroService.asyncGetHeroes().then(list=> this.heroes = list);
    }

}
