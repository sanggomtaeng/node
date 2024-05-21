import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MovieList() {
    const [movies, setMovies] = useState([]);

    const callAPI = async () => {
        const result = await axios.get('http://192.168.0.23:8000/movie');
        setMovies(result.data);
    }

    useEffect( () => { callAPI(); },[])

    return(
        <div className='contents'>
            <ul className='movie'>
                {movies.map(movie => <li className='screen' key={movie.no}>
                    <div className='topInfo'>
                        <span className='poster'>
                            <img src={'/image/' + movie.image} alt={movie.image}></img>
                        </span>
                        <div className='overbox'>
                            <div className='inner'></div>
                        </div>
                    </div>
                    <div className='bottomInfo'>
                        <span className='title'><Link to={`/MovieList/${movie.no}`}>{movie.title}</Link></span>
                        <span>
                            <span>{movie.runTime}분</span>
                        </span>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}

export default MovieList;