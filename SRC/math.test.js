const myMath = require('./math.js')
test('adds 1 + 2 to equal 3', () => {
    expect(myMath.add(1 ,2)).toBe(3); 
});
test('subtracts 2 - 2 to equal 0', () => {
    expect(myMath.subtract(2 ,2)).toBe(0); 
});
test('multiplies 1 * 2 to equal 2', () => {
    expect(myMath.multiply(1 ,2)).toBe(2); 
});
test('divides 2 / 2 to equal 1', () => {
    expect(myMath.divide(2 ,2)).toBe(1); 
});