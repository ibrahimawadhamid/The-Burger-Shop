import React from 'react';
import cssClasses from './Button.css';

const button = (props) => (
    <button
        onClick={props.clicked}
        className={[cssClasses.Button, cssClasses[props.buttonType]].join(" ")}
    >{props.children}</button>
);

export default button;