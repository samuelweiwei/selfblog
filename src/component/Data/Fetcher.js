import { useEffect, useState } from "react";

export default function Fetcher() {
  const [resp, setResp] = useState([]);
  const [error, setError] = useState([]);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };
  const url = "http://localhost:5262/firstround";
  useEffect(() => {
    async function getData() {
      try {
        await fetch(url, requestOptions)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setResp(data);
          });
      } catch (error) {
        setError(error);
      }
    }
    getData();
  }, [url]);
  const out = JSON.stringify(resp);
  console.log(`out is ${out}`);
  if (error) {
    return <div>{error}</div>;
  } else {
    return <div>{out}</div>;
  }
}

