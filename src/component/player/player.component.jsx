import React from 'react';
import RadarCharts from '../radar-charts/radarcharts.component'
import Demo from '../bar-charts/barcharts.component'
import RotateCharts from '../rotatecharts/rotatecharts.component'
import { Container, Row, Col } from 'react-bootstrap'
const Players = ({ playerOne, playerTwo }) => {


    if (playerOne && !playerTwo || !playerOne && playerTwo) {
        return (<Container>
            <Row>
                <Col xs={12} md={6}>
                    <div className="pleaseChoosePlayer">
                        <Demo />
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="pleaseChoosePlayer">

                        <RotateCharts />
                    </div>
                </Col>
            </Row>
        </Container>)
    }

    else if (playerOne && playerTwo) {
        return (
            <Container>
                <Row>
                    <Col xs={0} md={4}></Col>
                    <Col xs={12} md={5}>
                        <div className="pleaseChoosePlayer">
                            <RadarCharts />
                        </div>
                    </Col>
                    <Col xs={0} md={1}></Col>
                </Row>
            </Container>)
    }
    else {
        return (
            <Container>
                <Row>
                    <Col md={12} xs={12} s={12}>
                        <div className="pleaseChoosePlayer">
                            <h1 className="font">  Please Choose Player  </h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
    /*  1 & !2 || !1 &2
      1&2
      !1&!2 */
    return (
        <div>
            <div>
                <div className="playerOne">
                    {JSON.stringify(playerOne)}
                </div>
                <div className="playerTwo">
                    {JSON.stringify(playerTwo)}
                </div>
            </div>
        </div>
    )
};


export default Players;