
// const Footer = () => {
//     let footer ={
//       position :"relative",
//       top:"90vh",
//       width:"100%",

//     }
//   return (
//     <div className="bg-dark text-light" style={footer}>
      
//       <p className="text-center">Copyright &copy; myTodoList.com 2025..</p>
//     </div>
//   )
// }
// export default Footer


const Footer = () => {
  let footer = {
    position: "relative",
    top: "90vh",
    width: "100%",
    padding: "15px 0",
  };

  return (
    <div className="bg-dark text-light text-center" style={footer}>
      <p className="m-0">Copyright &copy; myTodoList.com 2025</p>
    </div>
  );
};

export default Footer;
