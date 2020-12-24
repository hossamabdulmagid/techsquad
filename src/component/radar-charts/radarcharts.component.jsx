import React from 'react';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import { Container, Col, Row } from 'react-bootstrap'
/*
player X
Key Dec Jan Feb Mar Apr
Attacking 65 55 70 67 72
Passing 55 45 66 70 80
Technical 76 77 71 80 76
Creativity 60 56 67 77 78
Defencive 40 45 50 48 60
    */

/*
player y
Key Dec Jan Feb Mar Apr
Attacking 80 85 89 88 90
Passing 89 79 74 70 80
Technical 90 81 71 80 76
Creativity 60 56 67 77 78
Defencive 66 76 50 67 70
 
*/
const RadarCharts = () => {

    const data = [
        {
            data: {
                
                Attacking: 0.65,
                Passing: 0.55,
                Technical: 0.70,
                Creativity: 0.67,
                Defencive: 0.72,
                bla: 0.1,
            },
            meta: { color: 'rgb(79, 85, 242)' }
        },
        {
            data: {
                Attacking: 0.80,
                Passing: .89,
                Technical: 0.90,
                Creativity: 0.60,
                Defencive: 0.66,
                bla: 0.4,

            },
            meta: { color: 'rgb(69, 188, 75)' }
        }
    ];

    const captions = {
        // columns
        Attacking: 'VITESSE',
        Passing: 'TIRS',
        Technical: 'PASSES',
        Creativity: 'PHYSIQUE',
        Defencive: 'DEFINSE',
        bla: "DRIBBLES"
    };
    console.log(data, `data`)
    return (
        <Container>
            <Row>
                <Col xs>
                    <RadarChart
                    className=""
                    captions={captions}
                    data={data}
                    size={310}
                /></Col>


            </Row>
        </Container>
    );
}


export default RadarCharts;