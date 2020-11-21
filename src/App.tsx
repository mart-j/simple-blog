import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';

const App = () => {
  return (
    <>
      <Link to="/simple-blog">Home</Link>
      <Link to="/simple-blog/about">About</Link>
      <Switch>
        <Route exact path="/simple-blog">
          <Home />
        </Route>
        <Route exact path="/simple-blog/about">
          <About />
        </Route>
        <Route path="/simple-blog/articles/:articleId">
          <Articles />
        </Route>
      </Switch>
    </>
  );
};
export default App;
