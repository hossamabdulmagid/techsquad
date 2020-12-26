import React, { Fragment } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import Main from './component/main/main'
const App = () => {
  return (
    <Fragment>
      <div className="App">
        <Container>
          <Row>
            <Col xs>
              <Main />
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default App;
