import { useState, useEffect } from "react";
import axios from "axios";

function ReviewDelete() {
    const [reviewForm, setReviewForm] = useState({
        "no" : 0,
        "reviewNo" : 0,
        "name" : "",
        "title" : "",
        "body" : "",
        "date" : "",
        "star" : 0
    })

    const deleteReview = async () => {
        const remove = await axios.delete(`http://localhost:8000/review/${reviewNo}`);
        setReviewForm(remove.data[0]);
    }

    useEffect( () => { callAPI(); },[]);

    return(
        <></>
    )
}

export default ReviewDelete;