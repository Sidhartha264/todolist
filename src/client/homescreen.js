import { useState } from "react";

const initialItems = [
  { text: "1 Kg Chicken", done: false},
  { text: "1.5 Kg Onion", done: false },
  { text: "1 packet of Ginger Garlic Paste", done: false }
]

function Homescreen() {
  const [taskItems, setTaskItems] = useState(initialItems);
  const [done, setDone] = useState(false);
  const [input, setInput] = useState("")

  const addItem = () => {
    setTaskItems([...taskItems]);
  }

  const toggleStrikeThrough = (index) => {
    setTaskItems(
      taskItems.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
      )
    );
  }

  return (
    <div>
    <h1>Your Todo List</h1>
    {/* <input type="text"
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    placeholder="Add a task..."/> */}
    <button onClick={addItem}>Add Item</button>

    <ul>
      {taskItems.map((item, index) => (
        <>
        <li key={index}><span style={{ textDecoration: item.done ? 'line-through' : 'none' }}>{item.text}</span></li>
        <button>Edit</button>
        <button onClick={() => toggleStrikeThrough(index)}>Done</button>
        </>
      ))}
    </ul>
    </div>
  );
}

export default Homescreen;

