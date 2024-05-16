import { Route, Routes, NavLink } from "react-router-dom";

function Home() {
  return(
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

function Topics() {
  return(
    <div>
      <h2>Topics</h2>
      <ul>
        <li><NavLink to="/topics/1">HTML</NavLink></li>
        <li><NavLink to="/topics/2">JS</NavLink></li>
        <li><NavLink to="/topics/3">REACT</NavLink></li>
      </ul>
      <Routes>
        <Route path="/1" element={"HTML is"}></Route>
        <Route path="/2" element={"JS is"}></Route>
        <Route path="/3" element={"REACT is"}></Route>
      </Routes>
    </div>
  )
}

function Contact() {
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function App() {
  return (
    <div className="App">
    <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <h1>Hello React Router</h1>
    </div>
    </nav>
      <div className="row">
        <div className="col-4">
          <ul className="nav flex-column">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/topics">Topics</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Contact">Contact</NavLink></li>
          </ul>
        </div>

        <div className="col-8">
        <div className="card">
        <div className="card-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics/*" element={<Topics />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
