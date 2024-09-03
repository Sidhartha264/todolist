import { useState } from "react";

const initialItems = [
  { text: "1 Kg Chicken", done: false },
  { text: "1.5 Kg Onion", done: false },
  { text: "1 packet of Ginger Garlic Paste", done: false }
]


function Homescreen() {
  const [taskItems, setTaskItems] = useState(initialItems);
  const [done, setDone] = useState(false);
  const [input, setInput] = useState(initialItems)

  const addItem = () => {
    setTaskItems([...taskItems, {text: input, done: false}]);
    setInput("");
  }

  // const toggleStrikeThrough = () => {
    
  // }

  return (
    <div>
    <h1>Your Todo List</h1>
    {/* <input type="text"
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    placeholder="Add a task..."/> */}
    <button onClick={addItem}>Add Item</button>

    <ul>
      {taskItems.map((item) => (
        <>
        <li><span >{item}</span></li>
        <button>Edit</button>
        <button>Done</button>
        </>
      ))}
    </ul>
    </div>
  );
}

export default Homescreen;

