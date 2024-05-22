import { useState } from "react";

export default function MovingDot(){
     const [position, setPosition] = useState({
        x: 100,
        y: 100
     });

     return (
      <div onPointerMove={e=>{
         setPosition({
           ...position,
            y: e.clientY
         });
      }} style={{
         position: 'relative',
         width: '100vw',
         height: '100vh',
      }}>
         <div style={{
            position:'absolute',
            backgroundColor: 'red',
            borderRadius: '50%',
            transform: `translate(${position.x}px,${position.y}py)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
         }} />
      </div>
     );
}