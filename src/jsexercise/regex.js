const str = 'hello world, i am joh*n nanon worrtoson, and i love th*e world very much, worst is wor*th1 to work,worthy of wortprton';
const reg1 = /\w+/g;
const reg2 = /\w+\*\w+/g;
const jud = str.match(reg1);
console.log(jud);
const jud2 = [...str.matchAll(reg2)];
console.log(jud2);