// import { useState } from "react";

// const AddItems = ({addItems}) => {
//     const [title ,setTitle] =useState();
//     const [desc ,setDesc] =useState();

//     const submit = (e)=>{
//              console.log("data submitted");
//              if(!title || !desc)
//              {
//                 alert("Fields Required");
//              }
//              addItems(title ,desc)

//     }
//   return (

//     <div>
//       <form className="row g-3" onSubmit={submit}>
//         <div className="col-md-6">
//           <label htmlFor="title" className="form-label">
//             Title
//           </label>
//           <input type="title" value={title} onChange={(e)=> {setTitle(e.target.value)}} className="form-control" id="title" />
//         </div>
//         <div className="col-md-6">
//           <label htmlFor="desc" className="form-label">
//             Description
//           </label>
//           <input type="desc" value={desc} onChange={(e)=> {setDesc(e.target.value)}} className="form-control" id="desc" />
//         </div>

//         <div className="col-12">
//           <button type="submit" className="btn btn-primary">
//            Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default AddItems;


import { useState } from "react";

const AddItems = ({ addItems }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("data submitted");

    if (!title || !desc) {
      alert("Fields Required");
      return;
    }

    addItems(title, desc);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="container my-4">
      <div className="card shadow-lg p-4">
        <h3 className="text-center mb-3">Add New Todo</h3>

        <form className="row g-3" onSubmit={submit}>
          <div className="col-md-6">
            <label htmlFor="title" className="form-label fw-semibold">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="form-control"
              id="title"
              placeholder="Enter title"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="desc" className="form-label fw-semibold">
              Description
            </label>
            <input
              type="text"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              className="form-control"
              id="desc"
              placeholder="Enter description"
            />
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary px-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddItems;
