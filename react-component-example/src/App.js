import Comp01 from "./components/Comp01"
import Comp02 from "./components/Comp02"
import Comp04 from "./components/Comp04"
import TodoApp from "./page/TodoApp"
import { Route, Routes, NavLink } from "react-router-dom";

function App() {
  return(
    <div className="App">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <h1>라우터</h1>
          <div className="row">
          <div className="col-4">
            <ul className="nav flex-column">
              <li className="nav-item"><NavLink className="nav-link" to="/">Comp01</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/Comp02">Comp02</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/Comp04">Comp04</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/TodoApp">TodoApp</NavLink></li>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={<Comp01 />} />
            <Route path="/Comp02" element={<Comp02 />} />
            <Route path="/Comp04" element={<Comp04 />} />
            <Route path="/TodoApp" element={<TodoApp />} />
          </Routes>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default App;
