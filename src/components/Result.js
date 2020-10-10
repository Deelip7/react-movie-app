import React from 'react';

const Result = ({ result, openPopup }) => {
  return (
    <div
      className='result'
      onClick={() => {
        openPopup(result.imdbID);
        console.log(result);
      }}
    >
      <img src={result.Poster} alt='movie poster' />
      <h3>{result.Title}</h3>
    </div>
  );
};

export default Result;
