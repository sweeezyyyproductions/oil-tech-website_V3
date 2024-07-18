import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { LoadingProvider } from './components/loading-context';
import LoadingSpinner from './components/loading-spinner';

const Root = () => (
  <LoadingProvider>
    <Router>
      <LoadingSpinner />
      <App />
    </Router>
  </LoadingProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
