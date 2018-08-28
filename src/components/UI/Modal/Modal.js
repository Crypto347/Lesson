import React from 'react';

import classes from './Modal.css';

const modal = (props) => (
    <div className={classes.Modal}
        style={{transform: props.show ? 'translate Y/0':'translate Y/(-100)',
                opacity: props.show ? '1':'0'}}>
        {props.children}
    </div>
);

export default modal;