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
          <div className="col-6">
            <ul className="nav">
              <li className="nav-item"><NavLink className="nav-link" to="/">홈</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/BoardList">게시글 목록</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/BoardInsert">게시글 등록</NavLink></li>
            </ul>
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
