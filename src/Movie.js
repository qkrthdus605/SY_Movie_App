// Movie Render
import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <img scr={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="title">{title}</h3>
                <h5 className="year">{year}</h5>
                <ul className="genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres_genre">{genre}</li>
                    ))}
                </ul>
                <div>
                    <p className="summary">{summary}</p>
                </div>
            </div>
        </div>
    );
}

Movie.propTypes={
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;