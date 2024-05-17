import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BoardList() {
    const [boards, setBoards] = useState([]);
    const [loading, setLoading] = useState([]);

    const callAPI = async ()=>{
        setLoading(true);
        const result = await axios.get('http://localhost:8000/board');
        setLoading(false);
        setBoards(result.data);
    }

    useEffect( () => { callAPI(); },[])
    if(loading) return <div><h2>Loading...</h2></div>

    return(
        <>
        <table className="table">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>TITLE</td>
                    <td>WRITER</td>
                    <td>DATE</td>
                </tr>
            </thead>
            <tbody>
                {boards.map(board =><tr key={board.id}>
                                    <td>{board.id}</td>
                                    <td><Link to={`/BoardList/${board.id}`}>{board.title}</Link></td>
                                    <td>{board.writer}</td>
                                    <td>{board.date}</td>
                                    </tr>)}
            </tbody>
        </table>
        </>
    )
}

export default BoardList;