import TodoItems from "./todoItems";

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todo List</h3>

      <div className="mb-3">
        <label for="formGroupExampleInput" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Title"
        />
      </div>
      <div className="mb-3">
        <label for="formGroupExampleInput2" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Description"
        />
      </div>

      {props.todos.length === 0
        ? "todos not there"
        : props.todos.map((todo) => {
            return (
              <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
export default Todos;
