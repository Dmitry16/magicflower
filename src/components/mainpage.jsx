import React, { Component } from 'react';
import '../App.css';
import Chart from './Chart';
import Grid from './Grid';

class MainPage extends Component {
  render() {
    return (
      <div className="mainpage">
        <Grid />
      </div>
    );
  }
}

export default MainPage;
