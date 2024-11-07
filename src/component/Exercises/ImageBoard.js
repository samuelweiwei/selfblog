import { useState } from "react";
const ImageBoard = ((props)=>{
    const images = props.images;
    console.dir(images);
    const [flipIndex, setFlipIndex] = useState(null);
    const [revealed, setRevealed] = useState({});
    function handleClick(index){
        if (images[flipIndex] === images[index]){
            setRevealed({
                ...revealed,
                [index]:true,
                [flipIndex]:true
            })
        }
        setFlipIndex(index);

    }
    function isImageVisible(index){
        if (revealed[index] === true)
            return true;
        if (flipIndex === index)
            return true;
        return false;
    }

    return(
        <div className="imagesWrapper">
            {
                images.map((img, index)=>{
                    return isImageVisible(index)?
                            (<img alt='' src={img}></img>):
                            (<div className="imagePlaceholder" onClick={()=>handleClick(index)}></div>);
                })
            }
        </div>
    );
    
});
export default ImageBoard;