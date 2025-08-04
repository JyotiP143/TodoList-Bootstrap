const TodoItems = ({ todo, onDelete }) => {
  return (
    <div>
      
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button
        type="button"
        classNameName="btn btn-danger "
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default TodoItems;
