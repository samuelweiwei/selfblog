function handleClick(ele) {
  const para = document.createElement('li');
  const text = document.createTextNode('water');
//   para.innerText='I am new added';
  para.appendChild(text);
  ele.children[0].appendChild(para);
  const licom = ele.children[0].children;
  for (var ee of licom) {
    console.log(ee.innerText);
  }
  // const element = ele.querySelector("<p>").firstChild;
  // alert(element);
console.log(`system id is: ${document.close()}`);
//   alert(node1);
}

const newText = document.createTextNode('hahahaha');
const pele = document.getElementsByTagName("ul").item(0).children[0];
pele.setAttribute('style', 'color:blue');
// pele.appendChild(newText);

var flag = true;
function handleExtra() {
  const ele = document.getElementById("ppp");
  if (flag) {
    ele.innerText = "Change to page page page";
    flag = !flag;
  }else{
    ele.innerText = "Write a new page";
    flag = !flag;
  }
}

function resolveAfterSecs(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('resolved');
      console.log('resolved');
    }, 2000)
  })
}

async function asyncAftersecs(){
  console.log('calling')
  const data = (new Promise((resolve, reject)=>resolve(fetch("https://pokeapi.co/api/v2/pokemon?limit=2&offset=0")))).then((value) =>value.json());
  console.log(data);
}

asyncAftersecs();