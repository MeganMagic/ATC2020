import React from 'react';
import { HashRouter, Route }from 'react-router-dom';
import './css/App.css';

import Home from './routes/Home3';
import Level from './routes/Level';
import Level1 from './routes/Level1';
import Gallery from './routes/Gallery';



function App() {
  return (
    <HashRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/level/:level" component={Level} />   
        <Route exact path="/level/:level/gallery/:workID" component={Gallery} />
    </HashRouter>
  );
}

export default App;
