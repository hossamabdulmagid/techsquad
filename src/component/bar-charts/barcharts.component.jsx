import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    LineSeries,
    Title,
    Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Animation } from '@devexpress/dx-react-chart';
import { Container } from 'react-bootstrap';

const format = () => tick => tick;
const legendStyles = () => ({
    root: {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'row',
    },
});
const legendLabelStyles = (theme) => ({
    label: {
        paddingTop: theme.spacing(1),
        whiteSpace: 'nowrap',
    },
});
const legendItemStyles = () => ({
    item: {
        flexDirection: 'column',
    },
});

const legendRootBase = ({ classes, ...restProps }) => (
    <Legend.Root {...restProps} className={classes.root} />
);
const legendLabelBase = ({ classes, ...restProps }) => (
    <Legend.Label className={classes.label} {...restProps} />
);
const legendItemBase = ({ classes, ...restProps }) => (
    <Legend.Item className={classes.item} {...restProps} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);
const Item = withStyles(legendItemStyles, { name: 'LegendItem' })(legendItemBase);
const barstyledStyles = () => ({
    chart: {
        paddingRight: '20px',
    },
    title: {
        whiteSpace: 'pre',
    },
});

const ValueLabel = (props) => {
    const { text } = props;
    return (
        <ValueAxis.Label
            {...props}
            text={`${text}`}
        />
    );
};

const titleStyles = {
    title: {
        whiteSpace: 'pre',
    },
};
const TitleText = withStyles(titleStyles)(({ classes, ...props }) => (
    <Title.Text {...props} className={classes.title} />
));

const BarCharts = ({ players }) => {
    let months = ["Dec", "Jan", "Feb", "Mar", "Apr"];
    let data = [];
    months.forEach(month => {
        let monthData = {};
        monthData['month'] = month;
        monthData['player1'] = parseInt(parseFloat(players[0][month].Attacking) * 100);
        if (players[1]) {
            monthData['player2'] = parseInt(parseFloat(players[1][month].Attacking) * 100);
        }
        data.push(monthData);
    })
    console.log("data", data);
    return (
        <Container>
            <Paper className="style">
                <Chart data={data} className={"chart Attacking"} >
                    <ArgumentAxis tickFormat={format} />
                    <ValueAxis
                        max={50}
                        min={0}
                        labelComponent={ValueLabel}
                    />
                    <LineSeries
                        name={players && players[0] && players[0].label}
                        valueField="player1"
                        argumentField="month"
                    />
                    {players && players[1] && (
                        <LineSeries
                            name={players && players[1] && players[1].label || ''}
                            valueField="player2"
                            argumentField="month"
                        />
                    )}

                    <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
                    <h4>
                        Attacking month to month
                    </h4>
                    <Animation />
                </Chart>
            </Paper>
        </Container>

    );

}

export default withStyles(barstyledStyles, { name: 'BarCharts' })(BarCharts);