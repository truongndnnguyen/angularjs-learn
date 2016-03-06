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
var hero_list_1 = require('../mocks/hero-list');
var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(hero_list_1.HEROES);
    };
    HeroService.prototype.getTopHeroes = function (count) {
        return Promise.resolve(hero_list_1.HEROES.slice(0, count));
    };
    HeroService.prototype.addHero = function (hero) {
        return Promise.resolve(hero).then(function (s) { return hero_list_1.HEROES.push(s); });
    };
    HeroService.prototype.getHero = function (id) {
        return Promise.resolve(hero_list_1.HEROES).then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
    };
    HeroService.prototype.asyncGetHeroes = function () {
        return new Promise(function (r) {
            setTimeout(function () {
                return r(hero_list_1.HEROES);
            }, 2000);
        });
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HeroService);
    return HeroService;
})();
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map