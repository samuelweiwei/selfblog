const arr1 = [1, 43, 7, 33, 34, 99, 74, 82, 31, 28, 8, 6, 8];
const arr2 = ['jack','tom', 'david', 'simpson', 'tiffany', 'rose', 'ronald' ];
const arr3 = [['papa', 'mama'], ['grandpa', 'grandma','grandson'], 'sister', 'brother'];

const calculate = arr1.filter((ele)=>ele%2 === 0);
console.dir(calculate);
const mapcal = arr1.map(ele=>ele*3);
console.dir(mapcal);
const entry = arr2.entries();
for(const [index, element] of entry){
    console.log(index, element);
}
const flatone = arr3.flat();
console.dir(`flatone is: ${flatone}`);
const newone = arr1.slice(2);
const newtwo = arr2.slice(0, 4);
const ff = arr3.flat();
const toffsplice = ff.toSpliced(2, 0, 'boton');
const revff = toffsplice.toReversed();
ff.splice(1,0,'cynthia');
console.log(`copy splice is: ${toffsplice}, and revers of copy splice is: ${revff}, and ff after splice is: ${ff}`);
console.log(`reverse ff is: ${ff.reverse()}`);