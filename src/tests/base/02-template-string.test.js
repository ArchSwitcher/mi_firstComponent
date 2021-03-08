import '@testing-library/jest-dom';
import { getSaludo } from '../../test-base/02-template-string';

describe('test in 02-template-string.test.js', () => {

    test('proob in method getSaludo must be return hola Pablo', () => {
        const name = 'Pablo';
        const greet = getSaludo(name);

        expect(greet).toBe('Hola ' + name)
    });

    test('test in 02-templateString.test.js withot arguments in getSaludo', () => {
        const greet = getSaludo();
        expect(greet).toBe('Hola Carlos');
    });
})