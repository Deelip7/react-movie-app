import axios from 'axios';
import React, { useState } from 'react';
import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';

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
  };

  const openPopup = (id) => {
    axios(APIKEY + '&i=' + id).then(({ data }) => {
      let result = data;
      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className='App'>
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search getUserInput={getUserInput} searchAPI={searchAPI} />

        <Results results={state.results} openPopup={openPopup} />

        {typeof state.selected.Title != 'undefined' ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App;
