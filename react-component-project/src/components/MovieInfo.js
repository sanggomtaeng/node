import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import axios from 'axios';

function MovieInfo() {
    const { movieNo } = useParams();
    const { reviewNo } = useParams();
    const navigation = useNavigate();

    const [form, setForm] = useState({
        "no" : 0,
        "title" : "",
        "image" : "",
        "openDate" : "",
        "runTime" : "",
        "audience" : 0,
        "body" : "",
        "like" : 0
    })

    const [review, setReview] = useState([])

    const callAPI = async() => {
        const movie = await axios.get(`http://localhost:8000/movie/${movieNo}`);
        setForm(movie.data[0]);

        const review = await axios.get(`http://localhost:8000/review/${movieNo}`);
        setReview(review.data);
    }

    useEffect( () => { callAPI(); },[]);

    const deleteReview = async () => {
        navigation(`/ReviewDelete/${reviewNo}`);
    }
    
    const updateReview = async () => {
        navigation(`/ReviewUpdate/${reviewNo}`);
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
                    <li><button className="review"><span className="rv">리뷰 작성</span></button></li>
                </ul>
                <div className="txtarea_box movdetailtxt">{form.body}</div>
            </div>
            <div className="reviewInner">
                <div className="reviewList">
                    <ul className="list">
                        {review.map(rv => <li key={rv.reviewNo}>
                            <div className="top">
                                <span className="name">{rv.name}</span>
                                <span className="date">{rvDateFormat}</span>
                                <button onClick={updateReview} className="edit">수정</button>
                                <button onClick={deleteReview} className="remove">삭제</button>
                            </div>
                            <div className="middle">{rv.body}</div>
                            <div className="bottom"></div>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;