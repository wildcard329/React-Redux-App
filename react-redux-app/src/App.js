import React from 'react';
import './App.css';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";

import {starwarsReducer as reducer} from './reducers/starwarsReducer';


import StarwarsForm from './components/StarwarsForm';
import CharactersList from './components/CharactersList';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Star Wars Characters</h1>
        <StarwarsForm />
        <CharactersList />
      </div>
    </Provider>
  );
}

export default App;
