import React from 'react';
import Aux from '../../hoc/_Aux';
import cssClasses from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <main className={cssClasses.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;