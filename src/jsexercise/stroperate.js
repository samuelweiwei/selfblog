function rotate1(str){
    let arrstr = str.split('');
    let out='';
    console.dir(arrstr);
    for(var i=arrstr.length-1;i>=0;i--){
        console.log(arrstr[i]);
        out = out.concat(arrstr[i]);
    }
    console.log(out);
}

function rotate2(str){
    return str.split('').reverse().join('');
}

function substitute(str){
    const strarr = str.split('');
    let newstrfin = '';
    for(let i=0;i<strarr.length;i++){
        let code = strarr[i].charCodeAt();
        code = code+1;
        const newstr=String.fromCharCode(code);
        newstrfin = newstrfin.concat(newstr);
    }
    return newstrfin;
}

//Random number between 1 to 10
function randomNum(){
    const rand = Math.floor(Math.random()*10);
    console.log(rand);
}


randomNum();
console.log(rotate2('kala world'));
console.log(substitute('abcd'));