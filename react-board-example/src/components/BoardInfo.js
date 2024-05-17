import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function BoardInfo() {
    const { boardId } = useParams();
    const [lodaing, setLoading] = useState([]);
    const navigation = useNavigate();

    const [form, setForm] = useState({
        "id" : 0,
        "title" : "",
        "body" : "",
        "writer" : "",
        "date" : ""
    });

    const callAPI = async () => {
        setLoading(true);
        const board = await axios.get(`http://localhost:8000/board/${boardId}`);
        setLoading(false);
        setForm(board.data[0]);
    }

    useEffect( () => { callAPI(); },[]);
    if(lodaing) return <div><h2>Loading...</h2></div>

    const goBack = () => {navigation(-1)};

    const deleteBoard = async () => {
        const remove = await axios.delete(`http://localhost:8000/board/${boardId}`);
        setForm(remove.data[0]);
        navigation("/BoardList");
    }
    
    const updateBoard = async () => {
        navigation(`/BoardUpdate/${boardId}`);
    }

    return(
        <div className="card" style={{width: "25rem"}}>
        <div className="card-head"> {form.writer} {form.date} </div>
        <div className="card-body">
            <h5 className="card-title">{form.title}</h5>
            <p className="card-text">{form.body}</p>
            <button onClick={updateBoard} className="btn btn-primary">수정</button>
            <button onClick={deleteBoard} className="btn btn-primary">삭제</button>
            <button onClick={goBack} className="btn btn-primary">뒤로</button>
        </div>
        </div>
    )
}

export default BoardInfo;