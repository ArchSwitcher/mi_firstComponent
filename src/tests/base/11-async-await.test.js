import { getImagen } from '../../test-base/11-async-await'

describe('tests in 11-async-await', () => {
    test('should return url with image', async() => {
        const url = await getImagen();

        console.log(url);
        expect(url.includes('https://')).toBe(true);
    })

})