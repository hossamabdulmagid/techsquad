import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';
import { Container } from 'react-bootstrap'
const data = [
    { Varaint: 'varaint a', DivisionRemainder: 0 },
    { Varaint: 'varaint b', DivisionRemainder: 25 },
    { Varaint: 'varaint c', DivisionRemainder: 50 },
    { Varaint: 'varaint d', DivisionRemainder: 75 },
];

class RotateCharts extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };
    }

    render() {
        const { data: chartData } = this.state;

        return (
            <Container>
                <Paper className="style">
                    <Chart
                        data={chartData}
                        rotated
                    >
                        <ArgumentAxis />
                        <ValueAxis max={7} />

                        <BarSeries
                            valueField="DivisionRemainder"
                            argumentField="Varaint"
                        />
                        <h4>
                            Sales by ads Varaint
                                </h4>
                        <Animation />
                    </Chart>
                </Paper>
            </Container>
        );
    }
}
export default RotateCharts;