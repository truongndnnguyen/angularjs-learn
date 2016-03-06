import {Component} from 'angular2/core';
import { Router } from 'angular2/router';
import {Hero} from './models/hero';
import {OnInit} from 'angular2/core';
import { HeroService }     from './services/hero.service';

@Component({
    selector: 'my-hero',
    templateUrl: '/app/views/my-hero.html',
    styleUrls: ['app/content/css/hero-list.css'],
})

export class MyHeroComponent implements OnInit {
    heroes: Hero[]
    myhero: Hero

    ngOnInit() {
        this.getHeroes();
        this.getMyHero();
    }
    constructor(private _heroService: HeroService, private _router: Router) {
    }
    getMyHero() {
        this._heroService.getTopHeroes(4).then(list=> this.myhero = list[0])
    }
    onSelect(hero: Hero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }

    getHeroes()
    {
        this._heroService.asyncGetHeroes().then(list=> this.heroes = list);
    }

}
