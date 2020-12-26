import React, { useState } from 'react';
import { DIV, Padding } from './styles'
import Select from 'react-select';
import { colourOptions, stateOptions } from './data';
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
            backgroundColor: state.isSelected ? "purple" : "black",
            color: state.isSelected ? "white" : "white",
        }),
        control: (base, state) => ({
            ...base,
            background: "#282C34",
            color: 'black',
            "&:hover": {
                background: "$fff",
                color: "black",
                borderColor: state.isFocused ? "red" : "purple"
            },

        })
    };



    const [show, setShow] = useState(true);
    const [show2, setShow2] = useState(true);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const handleChange = (event) => {

        setSelectedPlayers(event);
    }


    return (
        <>
            <Container>
                <DIV />
                <Row>
                    <Col xs={12} s={12} md={6} className="Col-select">
                        <Select
                            isMulti
                            name="players"
                            styles={customStyles}
                            options={colourOptions}
                            onChange={handleChange}
                        />
                        <Players playerOne={selectedPlayers[0]} playerTwo={selectedPlayers[1]} />  <br />
                    </Col>

                    <Col xs={12} s={12} md={6}>
                        <Select
                            defaultValue={[stateOptions[5]]}
                            name="month"
                            styles={SecoundCustomStyles}
                            options={stateOptions}
                        />
                    </Col>
                </Row>

                <h1 className="playerOne">
                    This player One
                    </h1>



            </Container>
        </>
    );
}

export default Main