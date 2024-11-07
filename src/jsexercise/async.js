const myPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(resolveFunc(100));
        // console.log(new Date().getTime());
    }, 200);
})
const resolveFunc = (num)=>{
    const term =num*3.14;
    console.log("execute resolve function:"+term);
}
myPromise.then((rsp)=>console.log(rsp));    