var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var hero_service_1 = require('./services/hero.service');
var heroes_component_1 = require('./heroes.component');
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('./hero-detail.component');
var myhero_component_1 = require('./myhero.component');
var add_hero_component_1 = require('./add-hero.component');
var router_1 = require('angular2/router');
var AppComponent = (function () {
    function AppComponent(_heroService) {
        this._heroService = _heroService;
        this.title = 'HERO TOURS APPLICATION';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'hero-app',
            templateUrl: '/app/views/app.html',
            styleUrls: ['app/content/css/app.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS, hero_service_1.HeroService]
        }),
        router_1.RouteConfig([
            {
                path: '/heroes',
                name: 'Heroes',
                component: heroes_component_1.HeroesComponent
            },
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent,
                useAsDefault: true
            },
            {
                path: '/hero/:id',
                name: 'HeroDetail',
                component: hero_detail_component_1.HeroDetailComponent,
            },
            {
                path: '/myhero',
                name: 'MyHero',
                component: myhero_component_1.MyHeroComponent,
            },
            {
                path: '/addhero',
                name: 'AddHero',
                component: add_hero_component_1.AddHeroComponent,
            }
        ]), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map