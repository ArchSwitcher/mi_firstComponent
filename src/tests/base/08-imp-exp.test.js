import heroes from "../../data/heroes";
import { getHeroeById, getHeroesByOwner } from "../../test-base/08-imp-exp";

describe('08-imp-exp tests', () => {
    test('should be retrun especific hero id ', () => {
        const id = 1;
        const hero = getHeroeById(id);

        const dataHero = heroes.find(h => h.id === id);

        expect(hero).toEqual(dataHero);
    });

    test('should be retrun undefined if hero not exists ', () => {
        const id = 10;
        const hero = getHeroeById(id);

        expect(hero).toBe(undefined);
    });

    test('should be return index of owners', () => {
        const owner = 'DC'
        const heros = getHeroesByOwner(owner);
        const dataHero = heroes.filter(h => h.owner === owner)
        expect(heros).toEqual(dataHero);
    });

    test('should be return array Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
    })



})