describe('test in file demo.test.js', () => {
    test('los strings deven de ser iguales', () => {
        // 1. inicializacion
        const message = 'hello world';
        // 2. estimul
        const message2 = `hello world`;

        // 3. see 
        expect(message).toBe(message2);
    });
})