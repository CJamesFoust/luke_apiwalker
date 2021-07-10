import './App.css';
import Input from './Components/Input'
import { Router } from '@reach/router';
import { useState } from 'react';
import SearchContext from './contexts/SearchContext';
import People from './Components/People';
import Planets from './Components/Planets';
import Error from './Components/Error';

function App() {

  const [ params, setParams] = useState({
    first: "people",
    second: 1
  })
  const [ results, setResults ] = useState({});

  return (
    <div className="App">
      <SearchContext.Provider
          value={{
            params,
            setParams,
            results,
            setResults
          }}
          >
        <Router>
          <Input path="/" />
          <People path="/people/:id" />
          <Planets path="/planets/:id" />
          <Error path="/404" />
        </Router>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
