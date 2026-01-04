import { useEffect, useState } from "react";
import "./App.css";
import AddItems from "./component/addItems";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import Todos from "./component/todos";

function App() {
  const[search , setSearch] = useState("");
  // Load todos from localStorage OR default todos
  const initTodos = () => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      return JSON.parse(storedTodos);
    } else {
      return [
        {
          sno: 1,
          title: "Learn React Basics",
          desc: "Understand components, props, state, and JSX fundamentals."
        },
        {
          sno: 2,
          title: "Build Todo App",
          desc: "Create a simple todo application with add and delete functionality."
        },
        {
          sno: 3,
          title: "Practice Tailwind CSS",
          desc: "Design responsive layouts using Tailwind utility classes."
        },
      ];
    }
  };

  const [todos, setTodos] = useState(initTodos);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  const addItem = (title, desc) => {
    const sno = todos.length ? todos[todos.length - 1].sno + 1 : 1;
   

    const mytodo = {
      sno,
      title,
      desc,
    };

    setTodos([...todos, mytodo]);
  };

  const filtertodos= todos.filter((todo) => 
    todo.title.toLowerCase().includes(search.toLowerCase()) ||
     todo.desc.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <Navbar name="TodoList" searchop={true} onSearch ={setSearch} />
      <AddItems addItems={addItem} />
      <Todos todos={filtertodos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
