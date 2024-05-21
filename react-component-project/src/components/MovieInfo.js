import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import axios from 'axios';

function MovieInfo() {
    const {movieNo} = useParams();

    const [form, setForm] = useState({
        "no" : 0,
        "title" : "",
        "image" : "",
        "openDate" : "",
        "runTime" : "",
        "audience" : 0,
        "body" : "",
        "like" : 0
    });

    const [review, setReview] = useState([]);
    
    const callAPI = async() => {
        const movie = await axios.get(`http://192.168.0.23:8000/movie/${movieNo}`);
        setForm(movie.data[0]);
        
        const review = await axios.get(`http://192.168.0.23:8000/review/${movieNo}`);
        setReview(review.data);
    }
    
    useEffect( () => { callAPI(); },[]);
    
    const [formdata, setFormdata] = useState({no:movieNo, name:"", title:"", body:""});
    const {no, name, title, body} = formdata;

    useEffect( () => {}, [] )

    const clickHandler = async () => {
        const insert = await axios.post('http://192.168.0.23:8000/review', formdata);
        setFormdata(insert);
        setFormdata({no:"", name:"", title:"", body:""});
        alert('등록이 완료되었습니다');
        closeBtn();
    }
    const insertReview = async () => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'block';
    }

    const closeBtn = async () => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
    }

    let date = moment(form.openDate);
    let dateFormat = date.format("YYYY-MM-DD");

    let rvDate = moment(review.date);
    let rvDateFormat = rvDate.format("YYYY-MM-DD");

    return(
        <div className="allInfo">
            <div className="detail">
                <div className="infoImage"><img src={'/image/' + form.image} alt={form.image}></img></div>
                <div className="infoTitle">{form.title}</div>
                <ul className="info1">
                    <li><span>{dateFormat} 개봉</span></li>
                    <li><span>{form.runTime}분</span></li>
                    <li><span>{form.audience}만명</span></li>
                </ul>
                <ul className="info2">
                    <li><button className="trailer"><span className="play">예고편 재생</span></button></li>
                    <li><button className="like"><span className="heart">좋아요</span></button></li>
                    <li><button onClick={insertReview} className="review"><span className="rv">리뷰 작성</span></button></li>
                </ul>
                <div className="txtarea_box movdetailtxt">{form.body}</div>
            </div>
            <div className="reviewInner">
                <div className="reviewList">
                    <ul className="list">
                        {review.map(rv => <li id={rv.reviewNo}>
                            <div className="top">
                                <span className="star"><img src="../public/image/별.jpg"></img></span>
                                <span className="name">{rv.name}</span>
                                <span className="date">{rvDateFormat}</span>
                                <button className="edit">수정</button>
                                <button className="remove">삭제</button>
                            </div>
                            <div className="middle">{rv.body}</div>
                            <div className="bottom"></div>
                        </li>)}
                    </ul>
                </div>
            </div>
            <div className="modal">
                <div className="modal_popup">
                    <h3>리뷰 작성</h3>
                    <div className="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">작성자</span>
                        <input className="form-control" value={name} onChange={e=>{setFormdata({...formdata, name:e.target.value}) }}></input>
                    </div>
                    <div className="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">제목</span>
                        <input className="form-control" value={title} onChange={e=>{setFormdata({...formdata, title:e.target.value}) }}></input>
                    </div>
                    <div className="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">내용</span>
                        <textarea className="form-control" value={body} onChange={e=>{setFormdata({...formdata, body:e.target.value}) }}></textarea>
                    </div>
                    <button onClick={clickHandler} type="button" className="add_btn">등록</button>
                    <button onClick={closeBtn} type="button" className="close_btn">닫기</button>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;