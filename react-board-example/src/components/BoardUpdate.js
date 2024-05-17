import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function BoardUpdate() {
    const { boardId } = useParams();
    const navigation = useNavigate();
    const [form, setForm] = useState({
        "id" : 0,
        "title" : "",
        "body" : "",
        "writer" : "",
        "date" : ""
    });

    const callAPI = async () => {
        const board = await axios.get(`http://localhost:8000/board/${boardId}`);
        setForm(board.data[0]);
    }

    useEffect( () => { callAPI(); },[]);


    const goBack = () => {navigation(-1)};
    const updateBoard = async () => {
        const change = {title:form.title, body:form.body};
        await axios.put(`http://localhost:8000/board/${boardId}`, change);
        navigation(`/BoardList/${boardId}`);
    }

    return(
        <div className="card" style={{width: "25rem"}}>
        <div className="card-head"> {form.writer} {form.date} </div>
        <div className="card-body">
            <div className="input-group flex-nowrap">
            <input className="form-control" value={form.title}
            onChange={e=>{setForm({...form, title:e.target.value}) }}></input></div>
            <div className="input-group flex-nowrap">
            <textarea className="form-control" value={form.body}
            onChange={e=>{setForm({...form, body:e.target.value}) }}></textarea></div>
            <button onClick={updateBoard} className="btn btn-primary">저장</button>
            <button onClick={goBack} className="btn btn-primary">취소</button>
        </div>
        </div>
    )
}

export default BoardUpdate;