//import Comp from "./components/Comp02"
//import Comp03 from "./components/Comp03"
import Todo from "../components/Todo"

function TodoApp() {
  const products = [{no:1, pname: "apple", price:100},
                     {no:2, pname: "glen", price:500},
                     {no:3, pname: "sherry", price:700}
                 ];
 
  return (
    <div className="App">
      {/* <Comp03 products={products}/> */}
      {/* <Comp></Comp> */}
      <Todo></Todo>

    </div>
  );
}

export default TodoApp;
