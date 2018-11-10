import React from 'react'
import cssClasses from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className={cssClasses.Logo}>
        <img src={burgerLogo} alt="The Burger Shop"/>
    </div>
);

export default logo