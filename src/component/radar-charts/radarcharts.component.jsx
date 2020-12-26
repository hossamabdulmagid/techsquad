import React from 'react';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import { Container, Col, Row } from 'react-bootstrap'
/*
player >>>  X
Key        Dec Jan Feb Mar Apr
Attacking  65  55  70  67  72
Passing    55  45  66  70  80
Technical  76  77  71  80  76
Creativity 60  56  67  77  78
Defencive  40  45  50  48  60
*/

/*
player >>>  Y
Key        Dec Jan  Feb    Mar   Apr
Attacking  80  85   89     88    90
Passing    89  79   74     70    80
Technical  90  81   71     80    76
Creativity 60  56   67     77    78
Defencive  66  76   50     67    70
 
*/


const RadarCharts = ({ players = [], period = 'avg' }) => {

    const captions = {
        // columns

        Attacking: "Attacking",
        Passing: "Passing",
        Technical: "Technical",
        Creativity: "Creativity",
        Defencive: "Defencive"
    }


    const months = ["Dec", "Jan", "Feb", "Mar", "Apr"];
    const data = players.map(player => {

        if (period != 'avg') {
            console.log("period", period);
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
    console.log("data", data);
    return (
        <Container >
            <Row className="text-center">
                <Col bsPrefix="d-block d-lg-none d-md-none">

                    <RadarChart
                        captions={captions}
                        data={data}
                        size={390}
                    />
                </Col>
            </Row>
            <Row className="text-center">
                <Col bsPrefix="d-block d-sm-none d-xs-none d-md-block d-lg-block center-item" >
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