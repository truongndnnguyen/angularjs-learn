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
var router_1 = require('angular2/router');
var hero_detail_component_1 = require('./hero-detail.component');
var hero_service_1 = require('./services/hero.service');
var HeroesComponent = (function () {
    function HeroesComponent(_heroService, _router) {
        this._heroService = _heroService;
        this._router = _router;
        this.title = 'My AngularJS Application';
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (h) {
        this.selectedHero = h;
    };
    HeroesComponent.prototype.gotoDetail = function () {
        var link = ['HeroDetail', { id: this.selectedHero.id }];
        this._router.navigate(link);
    };
    HeroesComponent.prototype.addHero = function (hero) {
        var h = { name: hero, id: this.heroes.length + 1, power: 'superime', alterEgo: 'test' };
        this.heroes.push(h);
        //this._heroService.addHero(h);
    };
    HeroesComponent.prototype.showForm = function () {
        var link = ['AddHero', {}];
        this._router.navigate(link);
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this._heroService.asyncGetHeroes().then(function (list) { return _this.heroes = list; });
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'heroes-list',
            templateUrl: '/app/views/hero-list.html',
            styleUrls: ['app/content/css/hero-list.css'],
            directives: [hero_detail_component_1.HeroDetailComponent]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], HeroesComponent);
    return HeroesComponent;
})();
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map