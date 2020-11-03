import React from 'react';
import { withRouter } from 'react-router-dom';

const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>Location</h4>
      <textarea
        name=""
        id=""
        cols="30"
        rows={7}
        value={JSON.stringify(location, null, 2)}
        readOnly={true}
      />
      <h4>Match</h4>
      <textarea
        name=""
        id=""
        cols="30"
        rows={7}
        value={JSON.stringify(match, null, 2)}
        readOnly={true}
      />
      <br />
      <button onClick={() => history.push('/')}>Home</button>
    </div>
  );
};
export default withRouter(WithRouterSample);
