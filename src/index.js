import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import GlobalState from './contexts/GlobalState';

ReactDOM.render(
  <GlobalState>
    <App />
  </GlobalState>,
  document.getElementById('root')
);
