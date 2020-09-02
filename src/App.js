import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './css/App.css';

import Home2 from './routes/Home2';
import Tour from './routes/Tour';
import Tour2 from './routes/Tour2';
import Tour3 from './routes/Tour3';
import Detail from './routes/Detail';
import View from './routes/View';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home2} />
      <Route path="/tour" exact={true} component={Tour} />
      <Route path="/tour2" exact component={Tour2} />
      <Route path="/tour3" exact component={Tour3} />
      <Route path="/detail/:key" exact component={Detail} />
      <Route path="/detail2" exact component={View} />
    </HashRouter>
  );
}

export default App;
