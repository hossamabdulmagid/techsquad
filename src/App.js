import React from 'react';
import './App.css';
import RadarCharts from './component/radar-charts/radarcharts.component'
import Layout from './component/layout/layout.component'
import Demo from './component/bar-charts/barcharts.component'
import RotateCharts from './component/rotatecharts/rotatecharts.component'
import { Container, Row, Col } from 'react-bootstrap'
const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={4} md={4}>
        </Col>
          <Col xs={4} md={6}>
            <Layout />
          </Col>
          <Col xs={4} md={2}>
        </Col>
        </Row>
      </Container>


      <div className="container">


        <div className="col-xs-4">

          {/*   <Layout />*/}

        </div>

        <div className="col-xs-4">


        </div>
        <div className="col-md-12">
          <RadarCharts />
        </div>


        <div className="container">

          <div xs={4} md={4} >
            <Demo />
          </div>

          <div xs={4} md={4} className="rapp">

          </div>

          <div xs={4} md={4} >
            <RotateCharts />
          </div>


        </div>
      </div>

    </>);
}

export default App;
