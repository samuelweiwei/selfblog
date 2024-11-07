import { useCallback, useState } from "react";
import { useEffect, useRef } from "react";
const PokemanList = ({ initialUrl }) => {
  const [totalCnt, setTotalCnt] = useState(0);
  const [nowCnt, setNowCnt] = useState(0);
  const [totalDat, setTotalDat] = useState([]);
  const [load, setLoad] = useState(false);
  const nextUrl = useRef(initialUrl);
  const getData = async (url)=>{
    const res = await fetch(url);
    return res.json();
  }
  const handleClick = ()=>{
    setLoad(true);
  }
  const setAll = useCallback((obj)=>{
    setTotalCnt(obj.count);
    setTotalDat([...totalDat, ...obj.results]);
    setNowCnt(nowCnt+20);
    nextUrl.current = obj.next;
  },[]);
  useEffect(() => {
    if((load) && (nextUrl.current) && (totalCnt > nowCnt))
      getData(nextUrl.current).then((res)=>{
        const jsonstr = JSON.stringify(res);
        const obj = JSON.parse(jsonstr);
        console.dir(obj);
        setAll(obj);
      });
      return ()=>{
        setLoad(false);
      }
    },
    [load, setAll]
  );
  return (
    <>
    <ul>
      {totalDat &&
        totalDat.map((ele, idx) => <li key={idx}>{ele.name}{" : "}<img alt='' src={ele.url}/></li>)}
    </ul>
    <button onClick={()=>handleClick()}>Load more</button>
    </>
  );
};

export default PokemanList;
