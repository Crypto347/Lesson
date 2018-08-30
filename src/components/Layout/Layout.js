import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        showSideDrawer: false,
        openMenu: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    openMenuHandler = () => {
        this.setState({
            openMenu: true,
            showSideDrawer: true
        });
    }

    render(){
        return(
            <Aux>
                <Toolbar openMenu={this.openMenuHandler}/>
                <SideDrawer 
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;