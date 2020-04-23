jest.mock('./formHandler.js')

test('should return value', () => {
    const func = async function handleSubmit(event) {
        const text = generateText('Test phrase');
        expect(handleSubmit).toBeThruthy();
    }
});