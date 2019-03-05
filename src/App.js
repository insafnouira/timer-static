import React, { Component } from 'react';
import Hour from './hour';
import Minute from './minute';
import Second from './second';
import Separator from './separator';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Hour/>
      <Separator/>
      <Minute/>
      <Separator/>
      <Second/>
       
      </div>
    );
  }
}

export default App;
