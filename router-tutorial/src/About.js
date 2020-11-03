import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === 'true';
  // console.log(, query, query.detail, showDetail);
  return (
    <div className="about">
      <h1>About</h1>
      <p>This project is for basic React-router practice</p>
      {showDetail && <p>detail is true.</p>}
    </div>
  );
};

export default About;
