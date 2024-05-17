import Home from './components/Home';
import BoardList from './components/BoardList';
import BoardInsert from './components/BoardInsert';
import BoardUpdate from './components/BoardUpdate';
import BoardInfo from './components/BoardInfo';
import { Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <div className="row">
          <div className="col-4">
            <ul className="nav flex-column">
              <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/BoardList">BoardList</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/BoardInsert">BoardInsert</NavLink></li>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/BoardList" element={<BoardList />}></Route>
            <Route path="/BoardInsert" element={<BoardInsert />}></Route>
            <Route path="/BoardUpdate/:boardId" element={<BoardUpdate />}></Route>
            <Route path="/BoardList/:boardId" element={<BoardInfo />}></Route>
          </Routes>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
