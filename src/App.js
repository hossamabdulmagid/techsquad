import React from 'react';
import './App.css';
import RadarCharts from './component/radar-charts/radarcharts.component'
import Layout from './component/layout/layout.component'
import Demo from './component/bar-charts/barcharts.component'
import RotateCharts from './component/rotatecharts/rotatecharts.component'
import { Container, Row, Col } from 'react-bootstrap'
import Main from './component/main/main'
const App = () => {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs>
            <Main />
          </Col>
        </Row>
      </Container>
      {/*
      <Container>
        <Layout />
        <Row>
          <Col xs={1} md={4}></Col>
          <Col xs={10} md={6}>
            <RadarCharts />
          </Col>
          <Col xs={1} md={2}></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Demo />
          </Col>
          <Col xs={12} md={6}>
            <RotateCharts />
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default App;
