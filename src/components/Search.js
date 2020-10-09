import React from 'react';

const Search = ({ getUserInput }) => {
  return (
    <article className='searchField-container'>
      <input type='text' name='searchmovies' placeholder='Search for Movies' className='searchmovies' onChange={getUserInput}></input>
    </article>
  );
};

export default Search;
