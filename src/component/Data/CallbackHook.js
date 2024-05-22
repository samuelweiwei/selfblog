import { memo, useState, useCallback } from "react";

export function CallbackHook(){
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = ()=>{
        setCount(c=>c+1);
    }

    const addTodo = useCallback(()=>{
        setTodos(t=>[...t, "new todo"]);
    }, [todos]);

    return(
        <>
        <Tods todos={todos} addTodo = {addTodo} />
        <hr />
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
        </div>
        </>
    );
}

export function CallbackFailHook(){
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = ()=>{
        setCount(c=>c+1);
    }

    const addTodo = ()=>{
        setTodos(t=>[...t, "new todo"]);
    }

    return(
        <>
        <Tods todos={todos} addTodo = {addTodo} />
        <hr />
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
        </div>
        </>
    );
}

const Tods=({todos, addTodo})=>{
    console.log("child render");
    return(
        <>
        <h2>My tools</h2>
        {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}>Add todo</button>
        </>
    );
}

export default memo(Tods);