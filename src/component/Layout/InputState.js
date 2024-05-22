import {useState} from 'react';

export default function InputState() {
  //let firstName = '';
  //let lastName = '';
  const initialName={
    firstName: "",
    lastName: ""
  };
  const [wrap, setWrap] = useState(initialName);

  function handleChange (key, e) {
    setWrap({...wrap, [key]: e.target.value})
  }

  function handleReset() {
    setWrap({lastName:"", firstName:""});
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={wrap.firstName}
        onChange={(e)=>handleChange("firstName", e)}
      />
      <input
        placeholder="Last name"
        value={wrap.lastName}
        onChange={(e)=>handleChange("lastName", e)}
      />
      <h1>Hi, {wrap.firstName} {wrap.lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
