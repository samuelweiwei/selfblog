import { useReducer, useEffect, useState } from "react";

export default function PokemanReducer({ initialUrl }) {
  const [rend, setRend] = useState(false);
  const reducerStatus = (state, action) => {
    switch (action.type) {
      case "update":
        console.dir(action.obj);
        return {
          totalCnt: action.obj.count,
          totalDat: [...state.totalDat, ...action.obj.results],
          nowCnt: state.nowCnt + 20,
          load: false,
          url: action.obj.next,
        };
      case "load":
        return {
          ...state,
          load: true,
        };
      default:
        throw Error("Unknown action type:" + action.type);
    }
  };
  const [state, dispatch] = useReducer(reducerStatus, {
    totalCnt: 0,
    totalDat: [],
    nowCnt: 0,
    load: false,
    url: initialUrl,
  });

  useEffect(() => {
      const getData = async () => {
        const rsp = await fetch(initialUrl);
        return rsp.json();
      };
      getData().then((ret) => {
        const swapdat = JSON.stringify(ret);
        const obj = JSON.parse(swapdat);
        console.dir(obj);
        dispatch({
          type: "update",
          obj: obj,
        });
      });
    return (()=>{
        setRend(false);
    })
  }, [initialUrl, rend]);

  const handleClick = () => {
    setRend(true);
    dispatch({
      type: "load",
    });
  };

  return (
    <>
      <ul>
        {state &&
          state.totalDat.map((ele, idx) => (
            <li key={idx}>
              {ele.name}
              {" : "}
              <img alt="" src={ele.url} />
            </li>
          ))}
      </ul>
      <button onClick={() => handleClick()}>Load more</button>
    </>
  );
}
