import Home from "./components/Home";
import MovieList from "./components/MovieList";
import MovieInsert from "./components/MovieInsert";
import MovieInfo from "./components/MovieInfo";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/">홈</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/MovieList">영화</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/MovieInsert">영화등록</NavLink>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/MovieList" element={<MovieList />}></Route>
      <Route path="/MovieInsert" element={<MovieInsert />}></Route>
      <Route path="/MovieList/:movieNo" element={<MovieInfo />}></Route>
    </Routes>
    </div>
  );
}

export default App;
