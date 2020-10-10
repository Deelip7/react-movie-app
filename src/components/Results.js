import React from 'react';
import Result from './Result';

const Results = ({ results, openPopup }) => {
  return (
    <section className='results'>
      {results.map((result) => {
        if (result.Poster !== 'Ns/A' || result.Plot !== 'N/A') {
          console.log(result.Plot);
          return <Result key={result.imdbID} result={result} openPopup={openPopup} />;
        }
      })}
    </section>
  );
};

export default Results;
