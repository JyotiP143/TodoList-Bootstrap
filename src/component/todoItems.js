// const TodoItems = ({ todo, onDelete }) => {
//   return (
//     <div>
      
//       <h4>{todo.title}</h4>
//       <p>{todo.desc}</p>
//       <button
//         type="button"
//         className="btn btn-danger "
//         onClick={() => {
//           onDelete(todo);
//         }}
//       >
//         Delete
//       </button>
//     </div>
//   );
// };
// export default TodoItems;
const TodoItems = ({ todo, onDelete }) => {
  return (
    <div className="card my-3 shadow-sm p-3">
      <h4 className="fw-bold">{todo.title}</h4>
      <p className="text-muted">{todo.desc}</p>

      <button
        type="button"
        className="btn btn-danger btn-sm addclasFor-btn"
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
