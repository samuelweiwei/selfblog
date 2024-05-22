import FetchSum from "./DataCalculate";
const val=[1, 2];
describe('sum module', ()=>{
    test('add 1+2 to equal 3', ()=>{
        expect(FetchSum(val)).toBe(3);
    });
});