import React from 'react';
import RadarCharts from '../radar-charts/radarcharts.component'
import BarCharts from '../bar-charts/barcharts.component'
import RotateCharts from '../rotatecharts/rotatecharts.component'
import { Container, Row, Col } from 'react-bootstrap'
import { Avatar } from "@chakra-ui/react"

const Players = ({ playerOne, playerTwo }) => {
    if (playerOne && !playerTwo || !playerOne && playerTwo) {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={4} className="styled"> </Col>
                    <Col xs={12} md={4} className="styled">
                        <div className="User">
                            <div className="roundblue">
                            </div>
                            <Avatar size="xs" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                            <h3 className="name">
                                Kylian mbappe
                            </h3>
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="styled"></Col>

                    <Col xs={12} md={6}>
                        <div className="pleaseChoosePlayer">
                            <BarCharts />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="pleaseChoosePlayer">
                            <RotateCharts />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

    else if (playerOne && playerTwo) {
        return (
            <Container>
                <Row>
                    <Col xs={12} md={4} className="styled">
                        <div className="User">
                            <div className="roundblue"></div>
                            <Avatar size="xs" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                            <h3 className="name">
                                Kylian mbappe
                            </h3>
                        </div>
                    </Col>
                    <Col xs={12} md={4} className="styled"><small>vs</small></Col>
                    <Col xs={12} md={4} className="styled">
                        <div className="User">
                            <div className="roundgreen"></div>
                            <Avatar size="xs" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                            <h3 className="name">
                                Antonine Griezmans
                            </h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={0} md={4}></Col>
                    <Col xs={12} md={5}>
                        <div className="pleaseChoosePlayer">
                            <RadarCharts />
                        </div>
                    </Col>
                    <Col xs={0} md={1}></Col>
                </Row>
            </Container>
        )
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
};

export default Players;