import React from 'react';

const GiphyDisplay = (props) => (
    <div className="calc-display">
        <img className="calc-display__logo" src="" />
        <div>{props.display}</div>
    </div>
);

export default GiphyDisplay;