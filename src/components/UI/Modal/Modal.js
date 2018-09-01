import React, {Component} from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import  Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{

    shouldComponentUpdate(nextProp, nextState){
        return nextProp.show !== this.props.show;
    }

    componentWillUpdate(){
        console.log('[Modal]WillUpdate');
    }

    render(){
        return(
            <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div className={classes.Modal}
            style={{transform: this.props.show ? 'translate Y/0':'translate Y/(-100)',
                    opacity: this.props.show ? '1':'0',
                    pointerEvents: this.props.show ? 'all' : 'none'}}>
            {this.props.children}
        </div>
    </Aux>
        )
    }
}
export default Modal;