import { useState } from "react";
import "./App.css";
import AddItems from "./component/addItems";
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

  const addItem = (title, desc) => {
    console.log("add ITEMS", title, desc);
    let sno = todos[todos.length - 1].sno + 1;
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos , mytodo])
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
      <AddItems addItems={addItem} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
