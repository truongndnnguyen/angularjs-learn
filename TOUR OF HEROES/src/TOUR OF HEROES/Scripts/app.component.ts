﻿import {Component} from 'angular2/core';
import {Hero} from './models/hero';
import {HeroService} from './services/hero.service'
import {HeroesComponent}  from './heroes.component'
import {DashboardComponent}  from './dashboard.component'
import {HeroDetailComponent} from './hero-detail.component'
import {MyHeroComponent} from './myhero.component'
import {AddHeroComponent} from './add-hero.component'


import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'hero-app',
    templateUrl: '/app/views/app.html',
    styleUrls: ['app/content/css/app.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HeroService]
})

@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/hero/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent,
    },
    {
        path: '/myhero',
        name: 'MyHero',
        component: MyHeroComponent,
    },
    {
        path: '/addhero',
        name: 'AddHero',
        component: AddHeroComponent,
    }

])

export class AppComponent {
    constructor(private _heroService: HeroService) { }
    title = 'HERO TOURS APPLICATION'
}



