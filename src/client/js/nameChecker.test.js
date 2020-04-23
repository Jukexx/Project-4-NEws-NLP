jest.mock('./nameChecker.js')

test('should return value', () => {
    const func = async function handleSubmit(event) {
        const nameResponse = generateText('adminuser3223');
        expect(nameSubmit).toBe('adminuser3223');
    }
});