import React from 'react';
import Ping from './Components/Ping'
import Books from './Components/Books'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">books</Link>
            </li>
            <li>
              <Link to="/ping">ping</Link>
            </li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/ping">
            <Ping />
          </Route>
          <Route path="/">
            <Books />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
