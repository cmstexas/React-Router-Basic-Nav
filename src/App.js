import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Route path='/' exact component={Home} />
    <Route path='/About' component={About} />
    <Route path='/Contact' component={Contact} />
    <Navigation />
  </div>
);

export default App;
