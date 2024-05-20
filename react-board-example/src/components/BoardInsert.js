import { useState, useEffect } from "react";
import axios from "axios";

function BoardInsert() {
    const [formdata, setFormdata] = useState({title:"", body:"", writer:""});
    const {title, body, writer} = formdata;

    useEffect( () => {}, [] )

    const clickHandler = async () => {
        const insert = await axios.post('http://localhost:8000/board', formdata);
        setFormdata(insert);
        setFormdata({title:"", body:"", writer:""});
    }
    
    const keyDownHandler = (e) => {
        if(e.key === 'Enter') { clickHandler() }
    }


    return(
        <>
        <div className="input-group flex-nowrap">
        <input type="text" className="form-control" name="title" placeholder="제목입력" value={title}
                onChange={e=>{setFormdata({...formdata, title:e.target.value}) }}></input></div>
        <div className="input-group flex-nowrap">
        <input type="text" className="form-control" name="body" placeholder="내용입력" value={body}
                onChange={e=>{setFormdata({...formdata, body:e.target.value}) }}></input></div>
        <div className="input-group flex-nowrap">
        <input type="text" className="form-control" name="writer" placeholder="작가입력"  value={writer} onKeyDown={keyDownHandler}
                onChange={e=>{setFormdata({...formdata, writer:e.target.value})}}></input></div>
        <button onClick={clickHandler} className="btn btn-primary mb-6">등록</button>
        </>
    )
}

export default BoardInsert;