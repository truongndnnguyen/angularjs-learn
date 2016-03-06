import {Component, OnInit} from 'angular2/core';
import {Hero} from './models/hero';
import {HeroService} from './services/hero.service'
import {RouteParams} from 'angular2/router';
@Component({
    selector: 'hero-detail',
    templateUrl: '/app/views/hero-detail.html',
    styleUrls: ['app/content/css/hero-detail.css'],
    inputs: ['hero']
})

export class HeroDetailComponent implements OnInit{
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);

    }
    constructor(private _heroService: HeroService, private _routeParams: RouteParams) { }
    goBack() {
        window.history.back();
    }

    public hero: Hero
}