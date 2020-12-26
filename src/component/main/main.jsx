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

    const handleChange = (event) => {
        setSelectedPlayers(event);
    }
    const [month, setMonth] = useState([{ name: 'January' }, { name: 'February' }, { name: 'March' }, { name: 'April' }, { name: 'December' }, { name: 'Avarage' }])

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

                                name="months"
                                styles={SecoundCustomStyles}
                                options={stateOptions}
                            />
                        </RapperedSelect>
                    </Col>
                </Row>

                <Players playerOne={selectedPlayers[0]} playerTwo={selectedPlayers[1]} />

            </Container>
        </Fragment>
    );
}

export default Main