import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./SearchMovie.css";

// 영화 정보 렌더링
function SearchMovie({id, year, title, poster, director, rating, actor}){
    return(
        <div className="movie">
            <a href={id}>
                <img scr={poster} alt={title} title={title}></img>
            <div className="movie_data">
                <h2 className="movie_title">{title}</h2>
                <p className="movie_rating"><span>평점</span>{rating}/10</p>
                <p className="movie_year"><span>개봉</span>{year}</p>
                <p className="movie_director"><span>감독</span>{director}</p>
                <p className="movie_actor"><span>출연 배우</span>{actor}</p>
            </div>
            </a>
        </div>
    )    
};

SearchMovie.propTypes={
    id: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired
};

export default SearchMovie;