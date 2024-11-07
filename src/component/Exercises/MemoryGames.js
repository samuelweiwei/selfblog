
import { shuffle } from "lodash";
import "./MemoryGames.css";
import ImageBoard from "./ImageBoard";

// const shuffle = (arr)=>{
//     for(let i=arr.length-1;i>0;i--){
//         const j = Math.floor(Math.random()*(i+1));
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
// };

const MemoryGame=({images})=>{
    const gameImages = shuffle([...images, ...images]);
    // gameImages.forEach((element)=>console.log(element));
    return <ImageBoard images={gameImages} />;
}
export default MemoryGame;