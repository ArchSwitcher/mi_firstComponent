import heroes from "../../data/heroes";
import { getHeroeByIdAsync } from "../../test-base/09-promesas";

describe('tests in promises', () => {
    test('getHeroeByIdAsyncshould be return a hero asyn', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBe(heroes[0]);
                done();
            });
    });

    test('should be get error if hero id doesnt exists', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });


})