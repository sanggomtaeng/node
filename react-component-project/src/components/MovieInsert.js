import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function MovieInsert() {
    const [formdata, setFormdata] = useState({title:"", image:"", openDate:"", runTime:"", audience:"", body:""});
    const {title, image, openDate, runTime, audience, body} = formdata;
    const navigation = useNavigate();

    useEffect( () => {}, [] )

    const clickHandler = async () => {
        const insert = await axios.post('http://localhost:8000/movie', formdata);
        setFormdata(insert);
        setFormdata({title:"", image:"", openDate:"", runTime:"", audience:"", body:""});
        alert('등록이 완료되었습니다');
        navigation('/MovieList');
    }

    const keyDownHandler = (e) => {
        if(e.key === 'Enter') { clickHandler() }
    }

    const goBack = () => {navigation(-1)};

    return(
        <div className='insert'>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">영화제목</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                value={title} onChange={e=>{setFormdata({...formdata, title:e.target.value}) }}/>
            </div>
            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupFile02">영화포스터</label>
                <input type="file" class="form-control" id="inputGroupFile02" 
                value={image} onChange={e=>{setFormdata({...formdata, image:e.target.value}) }}/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">개봉일자</span>
                <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                value={openDate} onChange={e=>{setFormdata({...formdata, openDate:e.target.value}) }}/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">상영시간(분)</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                value={runTime} onChange={e=>{setFormdata({...formdata, runTime:e.target.value}) }}/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">관객 수(만 명)</span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                value={audience} onChange={e=>{setFormdata({...formdata, audience:e.target.value}) }}/>
            </div>
            <div class="input-group">
                <span class="input-group-text">줄거리</span>
                <textarea class="form-control" aria-label="With textarea" onKeyDown={keyDownHandler}
                value={body} onChange={e=>{setFormdata({...formdata, body:e.target.value}) }}></textarea>
            </div>
            <div class="d-grid gap-2 d-md-block">
                <button onClick={clickHandler} class="btn btn-primary" type="button">등록</button>
                <button onClick={goBack} class="btn btn-primary" type="button">이전</button>
            </div>
        </div>
    )
}

export default MovieInsert;