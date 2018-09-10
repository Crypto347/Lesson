import React, {Component} from 'react';

import Layout from '../components/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';

class App extends Component {
  state = {
    show: true
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({show: false});
    },5000);
  }

  render() {
    return ( 
      <div >
        {/* <Layout>
          <BurgerBuilder/> 
        </Layout>  */}
        <Layout>
          {this.state.show ? <BurgerBuilder/> : null}
        </Layout>
      </div>
    );
  }
}

export default App;