import React from 'react';
import {
  Link,
  Route,
} from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  return (
    <div className="user_list">
      <h3 className="list_title">User List</h3>
      <ul className="users">
        <li>
          <Link to="/profiles/yee">Peek</Link>
        </li>
        <li>
          <Link to="/profiles/deicide">Deicide</Link>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => (
          <div className="guide">Choose an user you wanna look.</div>
        )}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};
export default Profiles;
