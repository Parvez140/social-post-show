import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route  path="/home">
          <Home></Home>
          </Route>
          <Route path="/post/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route  path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
