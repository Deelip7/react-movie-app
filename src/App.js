import axios from 'axios';
import React, { useState } from 'react';
import Search from './components/Search';
import Results from './components/Results';

require('dotenv').config();

function App() {
  const [state, setState] = useState({
    search: '',
    results: [],
    selected: {},
  });

  const APIKEY = process.env.REACT_APP_APIKEY;

  const searchAPI = (e) => {
    if (e.key === 'Enter') {
      axios(APIKEY + '&s=' + state.search).then((data) => {
        let results = data.data.Search;

        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const getUserInput = (e) => {
    let searchTerm = e.target.value;
    setState((prevState) => {
      return { ...prevState, search: searchTerm };
    });
    console.log(state.search);
  };

  return (
    <div className='App'>
      <header>
        <h1>Movie APP</h1>
      </header>
      <main>
        <Search getUserInput={getUserInput} searchAPI={searchAPI} />
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
