import { useState } from 'react';
import { sculptureList } from './TestData';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [showBackward, setShowBackward] = useState(true);
  const [showForeward, setShowForeward] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
    console.log(`Move next index ${index}`);
    setShowBackward(false);
    if (index >= sculptureList.length-2){
        // setIndex(0);
        setShowForeward(true);
        console.log(`Next changed index ${index}`);   
      }
  }

  function handleBackClick(){
    setIndex(index-1);
    console.log(`Move before index ${index}`);
    setShowForeward(false);
    if (index <= 1){
      // setIndex(0);
      setShowBackward(true);
      console.log(`Back changed index ${index}`);   
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick} disabled={showForeward}>
        Next
      </button>
      {" "}
      <button onClick={handleBackClick} disabled={showBackward}>
        Back
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}
