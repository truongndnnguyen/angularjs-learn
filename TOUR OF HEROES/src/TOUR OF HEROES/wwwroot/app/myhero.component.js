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
var hero_service_1 = require('./services/hero.service');
var MyHeroComponent = (function () {
    function MyHeroComponent(_heroService, _router) {
        this._heroService = _heroService;
        this._router = _router;
    }
    MyHeroComponent.prototype.ngOnInit = function () {
        this.getHeroes();
        this.getMyHero();
    };
    MyHeroComponent.prototype.getMyHero = function () {
        var _this = this;
        this._heroService.getTopHeroes(4).then(function (list) { return _this.myhero = list[0]; });
    };
    MyHeroComponent.prototype.onSelect = function (hero) {
        var link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    };
    MyHeroComponent.prototype.getHeroes = function () {
        var _this = this;
        this._heroService.asyncGetHeroes().then(function (list) { return _this.heroes = list; });
    };
    MyHeroComponent = __decorate([
        core_1.Component({
            selector: 'my-hero',
            templateUrl: '/app/views/my-hero.html',
            styleUrls: ['app/content/css/hero-list.css'],
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], MyHeroComponent);
    return MyHeroComponent;
})();
exports.MyHeroComponent = MyHeroComponent;
//# sourceMappingURL=myhero.component.js.map