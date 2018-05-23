import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CoverPhoto from './components/CoverPhoto'; 
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-content">
          UNDER CONSTRUCTION
        </p>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <Button color="primary">Button</Button>
            </div>
            <div className="col-md-6">
              <CoverPhoto />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
