import React from 'react';
import Result from './Result';

const Results = ({ results }) => {
  return (
    <article className='results'>
      {results.map((result) => (
        <Result result={result} />
      ))}
    </article>
  );
};

export default Results;
