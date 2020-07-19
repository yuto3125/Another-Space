import React from 'react';
import { withRouter } from 'C:/Users/kuuha/AppData/Roaming/npm/node_modules/react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
  yee: {
    name: 'peek',
    description: '🎼🎶🎵🎵🎶🎶🎵🎶',
  },
  deicide: {
    name: 'deicide',
    description: '내 앞에 복종하리라!',
  },
};
const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div className="alert">⚠ Users don't exist.</div>;
  }
  return (
    <div className="profile">
      <div className="profile-intro">
        <h3 className="proIntro">
          <strong>{username}</strong> ({profile.name})
        </h3>
        <p>{profile.description}</p>
      </div>
      <WithRouterSample />
    </div>
  );
};
export default withRouter(Profile);
