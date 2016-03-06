import {Component, OnInit} from 'angular2/core';
import {Hero} from './models/hero';
import {HeroService} from './services/hero.service'
import {RouteParams} from 'angular2/router';
@Component({
    selector: 'add-hero',
    templateUrl: '/app/views/add-hero-form.html',
    styleUrls: ['app/content/css/hero-form.css'],
})

export class AddHeroComponent implements OnInit{
    active = true;
    submitted = false;
    powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    onSubmit() { this.submitted = true; }
    ngOnInit() {
    }
    constructor(private _heroService: HeroService, private _routeParams: RouteParams) {
    }
    goBack() {
        window.history.back();
    }
    newHero() {
        this.active = false;
        this.model = new Hero(18, '', '', '');
        setTimeout(() => { this.active =true }, 0);
    }
    public hero: Hero
}