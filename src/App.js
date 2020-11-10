import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';

import Home3 from './routes/Home3';

import Lobby2 from './routes/Lobby2';
import Level1 from './routes/Level1';

import Detail from './routes/Detail';
import Gallery from './routes/Gallery';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Home3} />
        <Route path="/Level1" exact component={Level1} />
        <Route path="/Lobby/:level" exact component={Lobby2} />
        <Route path="/detail" component={Detail} />
        <Route path="/Gallery/:workId" exact component={Gallery} />
      </Switch>
    </Router>
  );
}

export default App;
