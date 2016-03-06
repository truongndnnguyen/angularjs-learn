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
var hero_1 = require('./models/hero');
var hero_service_1 = require('./services/hero.service');
var router_1 = require('angular2/router');
var AddHeroComponent = (function () {
    function AddHeroComponent(_heroService, _routeParams) {
        this._heroService = _heroService;
        this._routeParams = _routeParams;
        this.active = true;
        this.submitted = false;
        this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
        this.model = new hero_1.Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    }
    AddHeroComponent.prototype.onSubmit = function () { this.submitted = true; };
    AddHeroComponent.prototype.ngOnInit = function () {
    };
    AddHeroComponent.prototype.goBack = function () {
        window.history.back();
    };
    AddHeroComponent.prototype.newHero = function () {
        var _this = this;
        this.active = false;
        this.model = new hero_1.Hero(18, '', '', '');
        setTimeout(function () { _this.active = true; }, 0);
    };
    AddHeroComponent = __decorate([
        core_1.Component({
            selector: 'add-hero',
            templateUrl: '/app/views/add-hero-form.html',
            styleUrls: ['app/content/css/hero-form.css'],
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.RouteParams])
    ], AddHeroComponent);
    return AddHeroComponent;
})();
exports.AddHeroComponent = AddHeroComponent;
//# sourceMappingURL=add-hero.component.js.map