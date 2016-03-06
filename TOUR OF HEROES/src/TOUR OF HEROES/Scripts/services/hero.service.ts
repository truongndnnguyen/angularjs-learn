import {Injectable} from 'angular2/core';
import {HEROES} from '../mocks/hero-list'

@Injectable()

export class HeroService {
    getHeroes() {
        return HEROES;
    }
}