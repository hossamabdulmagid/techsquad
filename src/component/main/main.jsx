import React, { useState } from 'react';
import { DIV, Padding } from './styles'
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
            color: "white",
            color: state.isSelected ? 'white' : 'white',

        })
    };

    const SecoundCustomStyles = {
        option: (styles, state) => ({
            ...styles,
            backgroundColor: state.isSelected ? "orange" : "black",
            color: state.isSelected ? "white" : "white",
        }),
        control: (base, state) => ({
            ...base,
            background: "#282C34",
            color: state.isSelected ? "white" : "white",
            "&:hover": {
                background: "black",
                color: "white",

            },

        })
    };

    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleChange = (event) => {
        setSelectedPlayers(event);
        if (selectedPlayers.includes) {
            return `aaa`
        }
    }

    return (
        <>
            <Container>
                <DIV />
                <Row>
                    <Col xs={12} s={12} md={6} className="Col-select">
                        <Padding />

                        <Select
                            isMulti
                            name="players"
                            styles={customStyles}
                            options={dataOptions}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col xs={12} s={12} md={6}>
                        <Padding >
                            <Select
                                className="asa"
                                defaultValue={[stateOptions[5]]}
                                name="month"
                                styles={SecoundCustomStyles}
                                options={stateOptions}

                            />

                        </Padding>

                    </Col>

                </Row>
                <Players playerOne={selectedPlayers[0]} playerTwo={selectedPlayers[1]} />  <br />

            </Container>
        </>
    );
}

export default Main