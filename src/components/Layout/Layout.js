import React from 'react';
import Aux from '../../hoc/_Aux';
import cssClasses from './Layout.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className={cssClasses.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;