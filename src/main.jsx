import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Music from './Pages/music.jsx'; // Assuming Musicpage is in music.jsx

function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/music" component={Music} />
      </Switch>
    </Router>
  );
}

export default Main;