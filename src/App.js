import React, { useState } from 'react';
import Search from './components/Search';
import axios from 'axios';

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
        let searchResult = data.data.Search;
        console.log(searchResult);
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
      </main>
    </div>
  );
}

export default App;
