import React, { useState } from 'react';
import Search from './components/Search';

require('dotenv').config();

function App() {
  const [state, setState] = useState({
    search: '',
    results: [],
    selected: {},
  });

  const APIKEY = process.env.REACT_APP_APIKEY;

  const getUserInput = (e) => {
    let search = e.target.value;
    setState((prevState) => {
      return { ...prevState, search: search };
    });
    console.log(state.search);
  };

  return (
    <div className='App'>
      <header>
        <h1>Movie APP</h1>
      </header>
      <main>
        <Search getUserInput={getUserInput} />
      </main>
    </div>
  );
}

export default App;
