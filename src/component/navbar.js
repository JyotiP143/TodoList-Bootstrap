
// const Navbar = ({name ,searchop}) => {
//   return (
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">{name}</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
     
//       </ul>
//       {searchop ? <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form> :'no search'}
//     </div>
//   </div>
// </nav>
//   )
// }

// export default Navbar;

const Navbar = ({ name, searchop }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-4">{name}</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fw-semibold">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold">Link</a>
            </li>
          </ul>

          {searchop ? (
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-light" type="submit">
                Search
              </button>
            </form>
          ) : (
            <span className="text-light fw-semibold">No Search</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


