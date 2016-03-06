import {Component, OnInit} from 'angular2/core';
import {Hero} from './models/hero';
import {HeroService} from './services/hero.service'
import {RouteParams} from 'angular2/router';
@Component({
    selector: 'add-hero',
    templateUrl: '/app/views/add-hero.html',
    styleUrls: ['app/content/css/hero-detail.css'],
})

export class AddHeroComponent implements OnInit{
    ngOnInit() {
    }
    constructor(private _heroService: HeroService, private _routeParams: RouteParams) {
    }
    goBack() {
        window.history.back();
    }

    public hero: Hero
}