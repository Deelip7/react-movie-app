import React from 'react';
import Result from './Result';

const Results = ({ results, openPopup }) => {
  return (
    <section className='results'>
      {results.map((result) => {
        if (result.Poster !== 'N/A') {
          console.log(<Result key={result.imdbID} result={result} openPopup={openPopup} />);
          return <Result key={result.imdbID} result={result} openPopup={openPopup} />;
        } else {
          return console.log('Item not found');
        }
      })}
    </section>
  );
};

export default Results;
