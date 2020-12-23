import React from 'react';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

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
            <div className='container'>
                <div className="row">
                    <div className="col-md-4" xs={4}>

                    </div>

                    <div className="col-md-4" xs={4}>
                        <RadarChart
                            captions={captions}
                            data={data}
                            size={170}
                        />
                    </div>
                    <div className="col-md-4" xs={1}>

                    </div>

                </div>
            </div>
        );
    }
}

export default RadarCharts;