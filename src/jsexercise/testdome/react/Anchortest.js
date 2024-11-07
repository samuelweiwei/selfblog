import React, {useState} from 'react';
const BigMessage = () => {  
  const [tglStat, setTglStat] = useState(false);
  function handleClick(e){
    setTglStat(!tglStat);
  }
  return (
    <React.Fragment>
      <FocusableInput />
      <a href="#" onClick={()=>handleClick()}>Want to buy a new car?</a>
      {tglStat && <p>Call +11 22 33 44 now!</p>}
    </React.Fragment>
  );
}
const FocusableInput = (props) => {
  // Write your code here
  const f = props.shouldFocus;   
  return <input autoFocus={f} />;
};

const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

const TodoList = ({ items, onListClick, onItemClick }) => {
  const handleItemClick = (item, event) => {
    if (item.done){
      event.preventDefault();
      event.stopImmediatePropagation();
    }else{
      
    }
  };

  return (
    <ul onClick={onListClick}>
      {items.map((item, index) => 
        <TodoItem item={item} key={index} onClick={(event) => handleItemClick(item, event)}/>)}
    </ul>
  );
}

const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

const App = (props) => <TodoList
  items={props.items}
  onListClick={(event) => console.log("List clicked!")}
  onItemClick={(item, event) => { console.log(item, event) }}
/>;


export default BigMessage;


