import React from 'react';
import spinner from './choose.gif';

export default () => {
  return (
    <div>
      <img class = "spinner"
        src={spinner}
        style={{ height: '155%', margin: 'auto', display: 'block' }}
        alt="I Choose You!"
      />
    </div>
  );
};