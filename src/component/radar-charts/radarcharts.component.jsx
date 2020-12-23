import React from 'react';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import { Container, Col, Row } from 'react-bootstrap'
class RadarCharts extends React.Component {
    render() {
        const data = [
            {
                data: {
                    battery: 0.7,
                    design: .8,
                    useful: 0.9,
                    speed: 0.67,
                    weight: 0.8,
                    bla: 0.1,
                },
                meta: { color: 'blue' }
            },
            {
                data: {
                    battery: 0.6,
                    design: .85,
                    useful: 0.5,
                    speed: 0.6,
                    weight: 0.7,
                    bla: 0.4,

                },
                meta: { color: 'red' }
            }
        ];

        const captions = {
            // columns
            battery: 'VITESSE',
            design: 'TIRS',
            useful: 'PASSES',
            speed: 'PHYSIQUE',
            weight: 'DEFINSE',
            bla: "DRIBBLES"
        };

        return (

            <Container>
                <Row className="row">
                    <Col xs={4} md={4}></Col>
                    <Col xs={4} md={4}><RadarChart
                        className="initial"
                        captions={captions}
                        data={data}
                        size={200}
                    /></Col>
                    <Col xs={4} md={4}></Col>

                </Row>
            </Container>
        );
    }
}

export default RadarCharts;