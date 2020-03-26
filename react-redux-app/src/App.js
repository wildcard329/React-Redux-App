import React from 'react';
import './App.css';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {starwarsReducer} from './reducers/starwarsReducer';

import Form from './components/Form';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
      </div>
    </Provider>
  );
}

export default App;
