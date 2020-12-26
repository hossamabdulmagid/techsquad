import React from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import { Container, Col, Row } from 'react-bootstrap'
const RadarCharts = ({ players = [], period = 'avg' }) => {
    const captions = {
        Attacking: "Attacking",
        Passing: "Passing",
        Technical: "Technical",
        Creativity: "Creativity",
        Defencive: "Defencive"
    }

    const months = ["Dec", "Jan", "Feb", "Mar", "Apr"];

    const data = players.map(player => {
        if (period != 'avg') {
            player.data = player[period];
        } else {
            player.data = {
                Attacking: 0,
                Passing: 0,
                Technical: 0,
                Creativity: 0,
                Defencive: 0
            }
            months.forEach(month => {
                player.data.Attacking += player[month].Attacking / 5;
                player.data.Passing += player[month].Passing / 5;
                player.data.Technical += player[month].Technical / 5;
                player.data.Creativity += player[month].Creativity / 5;
                player.data.Defencive += player[month].Defencive / 5;

            })

        }

        return player;
    })
    return (
        <Container>
            <Row className="text-center">
                <Col bsPrefix="d-block d-md-none d-lg-none d-xl-none center-item">
                    <RadarChart
                        captions={captions}
                        data={data}
                    />
                </Col>
            </Row>
            <Row className="text-center">
                <Col bsPrefix="d-none d-md-block d-lg-block  d-xl-block center-item" >
                    <div>
                        <RadarChart
                            captions={captions}
                            data={data}
                            size={690}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}


export default RadarCharts;