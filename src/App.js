// import { Input } from "antd";
// import React, { useState } from "react";

// import { useEffect, useMemo, useRef, useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([{ id: 1 ,text :"todo1"},
//     { id :2 ,text : "todo2"}]);
//   const [value, setValue] = useState("");
//   const [editId, setEditId] = useState(null);
//   const [editValue, setEditValue] = useState("");

//   const deleteTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };
//   const updateTodo = (todo) => {
//     setEditId(todo.id)
//     setEditValue(todo.text)
//   };
//   const saveTodo = (id) => {
//     setTodos(todos.map(todo => todo.id === id ? {...todo, text:editValue} : todo

//     ))
//    setEditId(null);
//    setEditValue('');
//   };
//   const addTodo = () => {
//     if (value.trim() !== '') {
//       const newTodo = {
//         id: Date.now(),
//         text: value
//       };
//       setTodos([...todos, newTodo]);
//       setValue('');
//     }
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <ul>
//         {todos.map((todo) => (
//         <li key={todo.id}>
//           {editId === todo.id ? (
//          <>
//          <input type="text" value={editValue} onChange={(e)=>setEditValue(e.target.value)} />
//          <button onClick={() => saveTodo(todo.id)}>Save</button>

//          </>
//         ) : (
//           <>
//             {todo.text}
//             <button onClick={() => updateTodo(todo)}>Edit</button>
//            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//            </>
//            )}
//           </li>
//         ))}
//       </ul>
//       <input
//           type="text"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <button
//           onClick={addTodo}>
//           App todo
//         </button>
//     </div>
//   );
// }

// export default App;


// function App() {
  //  const [todos, setTodos] = useState([]);
  // const [value, setValue] = useState(true);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((json) => setTodos(json));
  // }, [setValue]);
  // const input = useRef(null);

  
  // console.log('hello 2');

  // const focus = () => {
  //  let val = input.current.value;
  //  console.log('foo', val);

  // }
// console.log(todos)

//   return (
//     <div>
//      {value && <Button />} 
      

//       <br />
//       <br />
//       <br />
//       <br />

//       <button onClick={() => setValue(false)}>hidden</button>

//       <input type="text" ref= {input}   />
//       <button onClick={focus}>submit</button>
//     </div>
//   );
// }
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "../src/pages/Container";
import Home from "../src/pages/Home.jsx";
function App () {

  // const [count, setCount] = useState(0);



  // const update = () => {
  //  console.log("heloo")
  // }

//  const [name, setName] = useState('click');
 
  //   const randomNum = useMemo(() =>  Math.random(), [update]);
  {/* <User.Provider value={{name ,setName}}> */}
  return(
    <div>  
          <Routes>
              <Route path="/" element={ <Container />} />
              <Route path="/collection/summer-sale-2025" element={<Home />} />
            </Routes>
   
    {/* <h1>{randomNum}</h1>
    <Button  update = {update}/>
    <h2>{count}</h2>
    <button onClick={() => setCount(oldValue => oldValue + 1)}> Incre</button>
    <button disabled = {count < 1} onClick={() => setCount(oldValue => oldValue - 1)}> Decr</button> */}
      {/* </User.Provider> */}
    </div>


  )

}


export default App;