import React from 'react';

import './App.css';
import Header from './components/Header'
import Mem from './components/Mem'
class App extends React.Component {
  constructor(props) {
    super();

  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Mem />
  

      </div>
    );
  }
  
}

export default App;
