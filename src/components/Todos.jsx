import React, { useState } from "react";
import "./Todos.css";

function Todos() {
  const [text, setText] = useState();
  const [task, setTask] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const onClick = () => {
    const arr = [...task, { name: text }];
    setTask(arr);
    setText("");
  };
  const handleKey=(e)=>{

    if(e.key==="Enter"){
        onClick()
    }
  }

  return (
    <div>
      <header>My Todos</header>
      <div>
        <input
          type="text"
          value={text}
          className="text"
          placeholder="Enter New Task"
          onChange={handleChange} onKeyPress={handleKey}
        ></input>
        <button type="button" onClick={onClick}>
          Add
        </button>
      </div>
      <div>
          {task.map((nTask, index) => {
            return <p  className="list">{index + 1}. {nTask.name}</p>;
          })}
      </div>
    </div>
  );
}

export default Todos;

