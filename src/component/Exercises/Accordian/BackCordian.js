import { useState } from "react";
import AccordianHeader from "./AccordianHeader";

const BackCordian = (({items})=>{
    const [expandable, setExpandable] = useState(null);
    const handleOnToggle = ((index)=>{
        if (index === expandable){
            setExpandable(null);
        }else{
            setExpandable(index);
        }
    });
    return (
        <div>
            {items.map((element, index)=>(
                <AccordianHeader title={element.title} 
                                 onToggle={()=>handleOnToggle(index)}
                                 isOpen = {expandable === index}
                                 >{element.content}</AccordianHeader>
            ))}
        </div>
    )
});

export default BackCordian;




