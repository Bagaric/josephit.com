import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="page-container">
          <Header />
          <div className="page-content-wrapper">
            <div className="content sm-gutter">
                Under construction
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired
};

export default App;