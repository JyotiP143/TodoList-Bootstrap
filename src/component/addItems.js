import { useState } from "react";

const AddItems = ({addItems}) => {
    const [title ,setTitle] =useState();
    const [desc ,setDesc] =useState();

    const submit = (e)=>{
             console.log("data submitted");
             if(!title || !desc)
             {
                alert("Fields Required");
             }
             addItems(title ,desc)

    }
  return (

    <div>
      <form className="row g-3" onSubmit={submit}>
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="title" value={title} onChange={(e)=> {setTitle(e.target.value)}} className="form-control" id="title" />
        </div>
        <div className="col-md-6">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input type="desc" value={desc} onChange={(e)=> {setDesc(e.target.value)}} className="form-control" id="desc" />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
           Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddItems;
