import React from 'react';

const Search = ({ getUserInput, searchAPI }) => {
  return (
    <article className='searchField-container'>
      <input type='text' name='searchmovies' placeholder='Search for Movies' className='searchmovies' onChange={getUserInput} onKeyPress={searchAPI}></input>
    </article>
  );
};

export default Search;
