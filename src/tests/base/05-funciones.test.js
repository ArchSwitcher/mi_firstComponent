import { getUser, getUsuarioActivo } from "../../test-base/05-funciones"

describe('proobs in 05-funciones', () => {

    test('getUser should be return an object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(user).toEqual(userTest);
    });

    test('getActiveUser should be return an object', () => {
        const username = 'pablo';
        const userActiveTest = {
            uid: 'ABC567',
            username: username
        }
        const activeUser = getUsuarioActivo(username)
            // console.log(activeUser);
            // console.log(userActiveTest);
        expect(activeUser).toEqual(userActiveTest);
    });

})