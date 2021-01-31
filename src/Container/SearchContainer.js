import React from 'react';
import MovieCard from '../components/MovieCard';
import MovieData from './item.json';

const SearchContainer = () => {
    return(
        <div style ={
            {
                display: 'flex',
                justifyContent: 'center',
                padding: '2rem' 
            }
        }>
            <div>
                <input type="text" placeholder="영화를 검색해 보세요" />
            </div>
            <div>
                {MovieData.items.map((item) => {
                    return <MovieCard item ={item}></MovieCard>;
                })}
            </div>
        </div>
    );
};

export default SearchContainer;