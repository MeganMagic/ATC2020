import React from 'react';
import { 
  HashRouter as Router, 
  Route, 
  Switch
 } from 'react-router-dom';
import './css/App.css';

import Home from './routes/Home3';
import Lobby from './routes/Lobby2';
import Level from './routes/Level';
import Level1 from './routes/Level1';
import Detail from './routes/Detail';
import Gallery from './routes/Gallery';
import Loading from './routes/Loading';



function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/level/:level" component={Level} />   
        <Route exact path="/loading" component={Loading} />
        <Route exact path="/level/:level/gallery/:workID" component={Gallery} />
      </Switch>
    </Router>
  );
}

export default App;
