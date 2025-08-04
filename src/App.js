import { useState } from "react";
import "./App.css";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import Todos from "./component/todos";
function App() {
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    console.log("delete todos", todo);
  };
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "a1",
      desc: "desc1",
    },
    {
      sno: 2,
      title: "a2",
      desc: "desc2",
    },
    {
      sno: 3,
      title: "a3",
      desc: "desc3",
    },
  ]);
  return (
    <>
      <Navbar name="TodoList" searchop={true} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer/>
    </>
  );
}

export default App;
