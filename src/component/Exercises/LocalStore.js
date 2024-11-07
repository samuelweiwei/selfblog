import { useEffect, useState } from "react";
export default function ShoppingList(){
    localStorage.removeItem("shopList");
    const [shoppingList, setShoppingList] = useState(JSON.parse(localStorage.getItem("shopList") || "[]"));
    const [newItem, setNewItem] = useState("");
    useEffect(()=>{
        localStorage.setItem("shopList", JSON.stringify(shoppingList));
    },[shoppingList])

    const updateList = (items) =>{
        setShoppingList(items);
        // localStorage.setItem("shopList", JSON.stringify(items));
        // (!items)?items.forEach((item)=>console.log(`After setting is: ${item}`)):console.log(`empty shopping list`);
    }

    const handleAddItem = (e) => {
        e.preventDefault();
        if (newItem === null){
            return;
        }     
        updateList([...shoppingList, newItem]);
        setNewItem("");

    };

    const handleRemoveItem = (itemDeleted) =>{
        updateList(shoppingList.filter(item => item !== itemDeleted));
    };

    const handleConsole = (it) =>{
        console.log(`handle console: ${it}`);
    }
    return (
        <div>
            <h2>Shopping List</h2>
            <div>
                <form onSubmit={handleAddItem}>
                    <input name="newItem" type="text" value={newItem} onChange={(e)=>setNewItem(e.target.value)}></input>
                    {" "}
                    <button type="submit">Add item</button>
                </form>
            </div>
            <ul>
               {
                shoppingList.map((it)=>(
                    <li>
                        {it+" "}
                        <button onClick={()=>handleRemoveItem(it)}>Remove</button>
                        {" "}
                        <button onClick={handleConsole(it)}>Console</button>
                    </li>
                ))
               }
            </ul>
        </div>
    );
}