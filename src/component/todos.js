import TodoItems from "./todoItems";

const Todos = (props) => {
  return (
    <div className="container my-4">
      <h3 className="text-center mb-4 fw-bold">Your Todo List</h3>

      {props.todos.length === 0 ? (
        <p className="text-center text-muted fs-5">No Todos to Display</p>
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItems
              todo={todo}
              key={todo.sno}
              onDelete={props.onDelete}
            />
          );
        })
      )}
    </div>
  );
};

export default Todos;
