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
var router_1 = require('angular2/router');
var AddHeroComponent = (function () {
    function AddHeroComponent(_heroService, _routeParams) {
        this._heroService = _heroService;
        this._routeParams = _routeParams;
    }
    AddHeroComponent.prototype.ngOnInit = function () {
    };
    AddHeroComponent.prototype.goBack = function () {
        window.history.back();
    };
    AddHeroComponent = __decorate([
        core_1.Component({
            selector: 'add-hero',
            templateUrl: '/app/views/add-hero.html',
            styleUrls: ['app/content/css/hero-detail.css'],
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.RouteParams])
    ], AddHeroComponent);
    return AddHeroComponent;
})();
exports.AddHeroComponent = AddHeroComponent;
//# sourceMappingURL=add-hero.component.js.map