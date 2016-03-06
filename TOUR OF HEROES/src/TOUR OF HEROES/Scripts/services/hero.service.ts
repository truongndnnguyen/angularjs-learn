import {Injectable} from 'angular2/core';
import {HEROES} from '../mocks/hero-list'
import {Hero} from '../models/hero'

@Injectable()

export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getTopHeroes(count: number) {
        return Promise.resolve(HEROES.copyWithin(count, 0));
    }

    getHero(id: number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
    asyncGetHeroes() {
        return new Promise<Hero[]>(r=> {
            setTimeout(function () {
                return r(HEROES)
            }, 2000);
        });
    }
}