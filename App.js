import React, { Component } from 'react';
import Router from './src/config/Router/Router.js';
import {Provider} from 'react-redux'; //redux management state
import {store} from './src/config/redux' // tempat menampung state global

class App extends Component {
  render() {
      return (
        <Provider store={store}>
          <Router />
        </Provider>
      );  
  }
}

export default App;





