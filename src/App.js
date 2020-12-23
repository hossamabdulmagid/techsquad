import React from 'react';
import './App.css';
import RadarCharts from './component/radar-charts/radarcharts.component'
import Layout from './component/layout/layout.component'
import Demo from './component/bar-charts/barcharts.component'
import RotateCharts from './component/rotatecharts/rotatecharts.component'
const App = () => {
  return (
    <div className="App">
      <div className="container">


        <div className="container">

          <div className="col-xs-4"></div>
          <div className="col-xs-4">

            <Layout />

          </div>
          <div className="col-xs-4"></div>


        </div>

        <div className="container">
          <div xs={2} md={4} > </div>


          <div xs={6} md={4} >

            <RadarCharts />

          </div>

          <div xs={4} md={4}></div>

        </div>

        <div className="container">

          <div xs={4} md={4} >
            <Demo />
          </div>
          <div xs={4} md={4} className="rapp"></div>

          <div xs={4} md={4} >
            <RotateCharts />
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
