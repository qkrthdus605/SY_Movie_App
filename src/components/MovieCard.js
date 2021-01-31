import React from 'react';

const MovieCard = ({ item }) => {
    const { title, link, image, pubDate, userRating } = item;
    return(
        <div className="movie-card-container">
            <div className="movie-img"></div>
            <div className="movie-text">
                <h2>제목 {title}</h2>
                <div>년도 {pubDate}</div>
                <div className="movie-summary-row">
                    <h5>평점</h5>
                </div>
                <div className="movie-likes">{'${userRating}/ 10'}</div>
            </div>
        </div>
    );    
};

export default MovieCard;