import { Route, Routes, NavLink, useParams, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {Card, CardBody} from "reactstrap";

const SimpleButton = styled.button`
  color: white;
  background-color: yellowgreen;
`

const LargeButton = styled(SimpleButton)`
  font-size: 2rem;
  margin: 10px;
`

function ReactButton(props) {
  return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
  background-color: yellowgreen;
  color: white;
`

function Home() {
  const style = {fontSize:"3rem", color:"blue"}
  return(
    <div>
      <h2>Home</h2>
      <div style={style}>Home...</div>
      <SimpleButton>스타일드컴포넌트</SimpleButton>
      <LargeButton>상속</LargeButton>
      <ReactButton>등록</ReactButton>
      <ReactButton>삭제</ReactButton>
      <ReactLargeButton>수정</ReactLargeButton>
    </div>
  )
}

var contents = [
  {id:1, title:'HTML', description:'HTML is...'},
  {id:2, title:'JS', description:'JS is...'},
  {id:3, title:'REACT', description:'REACT is...'}
];

function Topic() {
  var params = useParams();
  var topic_id = Number(params.topic_id);
  const topic = contents.find(e => e.id === topic_id);
  const navigation = useNavigate();
  const goHome = () => {navigation("/topics")};
  const goBack = () => {navigation(-1)};
  return(
    <div>
      <h3>{topic.title}</h3>
      {topic.description}
      <div className="m-2">
        <button onClick={goBack} className="btn btn-success me-3">뒤로가기</button>
        <button onClick={goHome} className="btn btn-info">홈으로</button>
      </div>
    </div>
  )
}

function Topics() {
  return(
    <div>
      <h2>Topics</h2>
      <ul className="nav nav-tabs">
        {contents.map((content => (
          <li key={content.id} className="nav-item">
            <NavLink className="nav-link" to={"/topics/" + content.id}>{content.title}</NavLink>
          </li>
        )))}
      </ul>
      <Routes>
        <Route path="/:topic_id" element={<Topic />}></Route>
      </Routes>
    </div>
  )
}

function Contact() {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  return(
    <div>
      <h2>Contact</h2>
      Contact...
      <div>이름 {search.get("name")}</div>
      <div>나이 {search.get("age")}</div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
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
        <Card>
        <CardBody className="card-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics/*" element={<Topics />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </CardBody>
        </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
