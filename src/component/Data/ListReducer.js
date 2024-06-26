import { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type.toLowerCase()) {
    case "complete":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default function ListReducer() {
    const[todos, dispatch] = useReducer(reducer, initialTodos);
    const handleComplete = (todo) => {
        dispatch({type:"complete", id: todo.id});
        console.log(`${todo.id} ... ${todo.complete}`);
    }

    return(
        <>
        {todos.map((todo) => (
            <div key={todo.id}>
                <label>
                    <input type="checkbox"
                    checked={todo.complete}
                    onChange={()=>handleComplete(todo)} />
                {todo.title}
                </label>
            </div>
        ))}
        </>
    );

}
