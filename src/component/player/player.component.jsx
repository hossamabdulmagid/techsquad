import React from 'react';
import RadarCharts from '../radar-charts/radarcharts.component'
import BarCharts from '../bar-charts/barcharts.component'
import RotateCharts from '../rotatecharts/rotatecharts.component'
import { Container, Row, Col } from 'react-bootstrap'
import { Avatar } from "@chakra-ui/react"

const dotclasses = ["roundblue", "roundgreen"];

const Players = ({ players = [], period = 'avg' }) => {
    if (players.length) {
        return (
            <Container>
                <Row>
                    {players.map((player, i) => {
                        return (
                            <>

                                <Col xs={12} md={4} className="styled" key={`player${i}`}>
                                    <div className="User">
                                        <div className={dotclasses[i]}></div>
                                        <Avatar size="xs" name={player.label} src={player.image} />
                                        <h3 className="name">
                                            {player.label}
                                        </h3>
                                    </div>
                                </Col>
                                {players.length == 2 && i == 0 ? (<Col xs={12} md={4} className="styled"><small>vs</small></Col>) : null}
                            </>
                        )
                    })}
                </Row>
                <Row>

                    <Col xs={12} md={12}>
                        <div className="pleaseChoosePlayer text-center">
                            <RadarCharts players={players} period={period} className="ss" />
                        </div>
                    </Col>

                </Row>

                <Row>
                    <Col xs={12} md={12}>
                        <div className="pleaseChoosePlayer">
                            <BarCharts players={players} />
                        </div>
                    </Col>

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