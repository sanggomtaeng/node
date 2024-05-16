//import Comp from "./components/Comp02"
//import Comp03 from "./components/Comp03"
import TodoApp from "./page/TodoApp"

function App() {
  const products = [{no:1, pname: "apple", price:100},
                     {no:2, pname: "glen", price:500},
                     {no:3, pname: "sherry", price:700}
                 ];
  //   const DATA = [
  //   { id: "todo-0", name: "Eat", completed: true },
  //   { id: "todo-1", name: "Sleep", completed: false },
  //   { id: "todo-2", name: "Repeat", completed: false },
  // ];
  return (
    <div className="App">
      {/* <Comp03 products={products}/> */}
      {/* <Comp></Comp> */}
      <TodoApp></TodoApp>

    </div>
  );
}

export default App;
