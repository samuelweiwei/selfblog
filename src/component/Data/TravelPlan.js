import { useState } from "react";
import { initialTravelPlan } from "./Places";

export default function TravelPlan(){
    const[plan, setPlan] = useState(initialTravelPlan);

    function handleComplete(parentId, childId){
        console.log(`Inside Parentid is: ${parentId}`);
        console.log(`Inside ChildId is: ${childId}`);
        const parent = plan[parentId];
        //Create a new version of parent place
        //don't have this childId
        const nextParent = {
            ...parent,
            childIds: parent.childIds.filter(id=>id !== childId)
        };
        //update the root state of object
        setPlan({
            ...plan,
            [parentId]: nextParent
        })
    }

    const root = plan[0];
    const planetIds = root.childIds;
    return(
        <><h2>Places to visit</h2>
        <ol>
            {planetIds.map(id=>(
                <PlaceTree key={id} id={id} parentId={0} placesById={plan} onComplete={handleComplete}/>
            ))}
        </ol>
        </>
    )
}

function PlaceTree({id, parentId, placesById, onComplete}){
    const place = placesById[id];
    const childIds = place.childIds;
    return(
        <li>
            {place.title}
            <button onClick={()=>{
                console.log(`Parentid is: ${parentId}`);
                console.log(`ChildId is: ${id}`);
                onComplete(parentId, id);
            }}>Complete</button>
            {childIds.length > 0 && 
                <ol>
                    {
                        childIds.map(childId =>(
                            <PlaceTree 
                                key={childId}
                                id = {childId}
                                parentId={id}
                                placesById={placesById}
                                onComplete={onComplete}
                                />
                        ))
                    }
                </ol>
            }
        </li>
    );
}
