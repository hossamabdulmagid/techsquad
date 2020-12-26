import React, { useState, Fragment } from 'react';
import { RapperedSelect } from './styles'
import Select from 'react-select';
import { dataOptions, stateOptions } from './data';
import { Container, Row, Col } from 'react-bootstrap';
import Players from '../player/player.component'
const Main = () => {
    const customStyles = {
        option: (styles, state) => ({
            ...styles,
            backgroundColor: state.isSelected ? "red" : "black",
        }),
        control: (base, state) => ({
            ...base,
            background: "#282c34",
            color: state.isSelected ? 'white' : 'white',

        })
    };

    const SecoundCustomStyles = {
        color: "white",
        option: (styles, state) => ({
            ...styles,
            backgroundColor: state.isSelected ? "silver" : "black",
            color: state.isSelected ? "gray" : "white",
        }),
        control: (base, state) => ({
            ...base,
            background: state.isSelected ? "#282C34" : "#282C34",
            color: state.isSelected ? "white" : "white",
        }),

    };

    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const [selectedPeriod, setSelectedPeriod] = useState('avg');

    const handleChange = (event) => {
        setSelectedPlayers(event || []);
    }

    const handleChangePeriod = (event) => {
        setSelectedPeriod(event.value || []);
    }
    const [month, setMonth] = useState([
        { name: 'January' },
        { name: 'February' },
        { name: 'March' },
        { name: 'April' },
        { name: 'December' },
        { name: 'Avarage' }
    ]);

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col xs={12} s={12} md={6}>
                        <RapperedSelect>
                            <Select
                                isMulti
                                name="players"
                                styles={customStyles}
                                options={dataOptions}
                                onChange={handleChange}
                            />
                        </RapperedSelect>
                    </Col>

                    <Col xs={12} s={12} md={6}>
                        <RapperedSelect>
                            <Select
                                defaultValue={stateOptions[5]}
                                name="months"
                                styles={SecoundCustomStyles}
                                options={stateOptions}
                                onChange={handleChangePeriod}
                                theme={(theme) => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                        ...theme.colors,
                                        text: 'orangered',
                                        primary25: 'hotpink',
                                        primary: 'white',
                                        neutral70: 'white',
                                        neutral80: 'white',
                                        neutral90: 'white',
                                    },
                                })}

                            />
                        </RapperedSelect>
                    </Col>
                </Row>
                <Players players={selectedPlayers} period={selectedPeriod} />
            </Container>
        </Fragment>
    );
}

export default Main