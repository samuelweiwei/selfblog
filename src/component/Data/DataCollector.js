import { people } from "./TestData";
import { Suspense, lazy, useEffect, useState } from "react";

export default function List() {
    const journalists = people.filter(pers => pers.profession == 'journalist');
    const listItems = journalists.map(person =>
        <li key={person.id}><b>({person.id+' '})</b>({' '+person.name+' '})&nbsp;({person.profession})</li>);
        return <ol>{listItems}</ol>;
};

export function RenderListOneByOne(){
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    function handleClick() {
      setIndex(index + 1);
      if (index >= people.length-1){
        setIndex(0);
        console.log(`changed index ${index}`);   
      }
    }

    function handleShowMore(){
      setShowMore(!showMore);
    }
    
    let person = people[index];
    return (
        <>
          <button onClick={handleClick}>
            Next
          </button>
          <h2>{person.id}</h2><br />
          <h3>
            <i>{person.name} </i> 
            by {person.profession}
          </h3><br></br>
          <button onClick={handleShowMore}>
          {showMore?'Hide':'Show'} details:
          </button>
          {showMore && <h3>{person.imageId}</h3>}
          <br />
        </>
    );
}