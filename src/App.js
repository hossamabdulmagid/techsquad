import React from 'react';
import './App.css';
import RadarCharts from './component/radar-charts/radarcharts.component'
import Layout from './component/layout/layout.component'
import Demo from './component/bar-charts/barcharts.component'
import RotateCharts from './component/rotatecharts/rotatecharts.component'
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Layout />
        <RadarCharts />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Demo />
            </div>
            <div className="col-6">
              <RotateCharts />
            </div>
          </div>
        </div>
      </header>

    </div>
  );
}

export default App;
