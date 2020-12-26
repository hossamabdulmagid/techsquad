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
const RadarCharts = () => {

    const data = [
        /*      {
                 data: {
                         name:"X",
                         Dec: {
         
                             Attacking: 0.65,
                             Passing: 0.55,
                             Technical: 0.76,
                             Creativity: 0.60,
                             Defencive: 0.40,
                             bla: 0.1,
                         },
                         Jan: {
         
                             Attacking: 0.55,
                             Passing: 0.45,
                             Technical: 0.77,
                             Creativity: 0.56,
                             Defencive: 0.45,
                             bla: 0.1,
                         },
                         Feb: {
         
                             Attacking: 0.70,
                             Passing: 0.66,
                             Technical: 0.71,
                             Creativity: 0.67,
                             Defencive: 0.50,
                             bla: 0.1,
                         },
         
                         Mar: {
         
                             Attacking: 0.67,
                             Passing: 0.70,
                             Technical: 0.80,
                             Creativity: 0.80,
                             Defencive: 0.48,
                             bla: 0.1,
                         },
         
                         Apr: {
         
                             Attacking: 0.72,
                             Passing: 0.80,
                             Technical: 0.76,
                             Creativity: 0.78,
                             Defencive: 0.60,
                             bla: 0.1,
                         },
         
                     },
                     meta: { color: 'rgb(79, 85, 242)' }
                 }, 
                 {
                   data: {
                  name: "Y",
                  Dec: {
  
                      Attacking: 0.80,
                      Passing: 0.89,
                      Technical: 0.90,
                      Creativity: 0.60,
                      Defencive: 0.60,
                      bla: 0.1,
                  },
                  Jan: {
  
                      Attacking: 0.85,
                      Passing: 0.79,
                      Technical: 0.81,
                      Creativity: 0.56,
                      Defencive: 0.76,
                      bla: 0.1,
                  },
                  Feb: {
  
                      Attacking: 0.89,
                      Passing: 0.74,
                      Technical: 0.71,
                      Creativity: 0.67,
                      Defencive: 0.50,
                      bla: 0.1,
                  },
  
                  Mar: {
  
                      Attacking: 0.88,
                      Passing: 0.70,
                      Technical: 0.80,
                      Creativity: 0.77,
                      Defencive: 0.67,
                      bla: 0.1,
                  },
  
                  Apr: {
  
                      Attacking: 0.90,
                      Passing: 0.80,
                      Technical: 0.76,
                      Creativity: 0.78,
                      Defencive: 0.70,
                      bla: 0.1,
                  },
  
              },
              meta: { color: 'rgb(79, 85, 242)' }
          },*/
        {
            data: {

                Attacking: 0.65,
                Passing: 0.55,
                Technical: 0.70,
                Creativity: 0.67,
                Defencive: 0.72,
                bla: 0.91,
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
                bla: 0.44,

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
    console.log(data, `>>>>>>>> data`)
    return (
        <Container>
            <Row>
                <Col xs>
                    <RadarChart
                        className=""
                        captions={captions}
                        data={data}
                        size={290}
                    /></Col>


            </Row>
        </Container>
    );
}


export default RadarCharts;