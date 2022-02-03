import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Data from './store/store';
import './scss/scss.scss';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{
      data: new Data()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);


