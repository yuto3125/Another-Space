import React from 'react';
import {
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistoryExample from './HistoryExample';

const App = () => {
  return (
    <div className="App">
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profiles">Profile</Link>
        </li>
        <li>
          <Link to="/history">History Sample</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path={['/about', '/info']} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistoryExample} />
        <Route
          render={({ location }) => (
            <div className="notFound">
              <h2 className="notFoundComment">This Page doesn't Exist:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
