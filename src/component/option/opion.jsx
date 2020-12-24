import React, { useState } from 'react';
import { DIV } from './styles'
import Select from 'react-select';
import { colourOptions, stateOptions } from './data';
import { Container, Row, Col } from 'react-bootstrap';
const Option = (props) => {
    const customStyles = {
        option: (styles, state) => ({
            ...styles,
            backgroundColor: state.isSelected ? "red" : "black",
        }),
        control: (base, state) => ({
            ...base,
            background: "#282c34",
            color: "white",
            color: state.isSelected ? 'white' : 'blue',

        })
    };
    const SecoundCustomStyles = {
        option: (styles, state) => ({
            ...styles,
            backgroundColor: state.isSelected ? "purple" : "black",
        }),
        control: (base, state) => ({
            ...base,
            background: "#282C34",
            color: 'white',
            "&:hover": {
                background: "$fff",
                color: "black",
                borderColor: state.isFocused ? "red" : "purple"
            },

        })
    };
    const [data, setData] = useState([]);


    const handleChange = (event) => {
        data.push(stateOptions);
        console.log(data, 'asdas');

    }
    return (
        <>
            <Container>
                <DIV />
                <Row>
                    <Col xs={6} md={6}>
                        <Select
                            isMulti
                            name="players"
                            styles={customStyles}
                            options={colourOptions}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col xs={6} md={6}>
                        <Select
                            defaultValue={[stateOptions[12]]}
                            name="month"
                            styles={SecoundCustomStyles}
                            options={stateOptions}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Option