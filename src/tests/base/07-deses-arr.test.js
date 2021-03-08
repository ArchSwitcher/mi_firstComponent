import { retornaArreglo } from '../../test-base/07-deses-arr'


describe('proobs in desetructure 07-deses-arr', () => {
    test('should be return string and number', () => {
        const [letters, numbers] = retornaArreglo();



        expect(letters).toBe('ABC');
        expect(typeof letters).toBe('string');
        expect(numbers).toBe(123);
        expect(typeof numbers).toBe('number');
    })

})