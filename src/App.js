import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import axios from 'axios';

import './App.css';
import Header from './components/ui/Header';
import Navbar from './components/ui/Navbar';
import Characters from './components/characters/Characters';
import Quotes from './components/quotes/Quotes';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Navbar />
        <Route path='/breaking-bad-react' exact component={Characters} />
        <Route path='/quotes' exact component={Quotes} />
      </div>
    </Router>
  );
};

export default App;
