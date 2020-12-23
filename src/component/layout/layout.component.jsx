import React, { Fragment } from 'react';
import '../../App.css'
import { Avatar, AvatarBadge, Wrap, WrapItem, GridItem, Grid } from "@chakra-ui/react"
import { Container, Row, Col } from 'react-bootstrap'


const Layout = () => {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col xs={4}><Avatar size="xs" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" bg="red" >
                        <AvatarBadge boxSize="1.25em" bg="blue.500" />
                    </Avatar>
                        <p className="UserName">
                            Kylian mbappe
                     </p></Col>
                    <Col>VS</Col>
                    <Col xs={4}>   <Avatar size="xs" name="Kent Dodds" src="https://bit.ly/kent-c-dodds">
                        <AvatarBadge boxSize="1.25em" bg="green.500" />
                    </Avatar>
                        <p className="UserName">
                            Antonine Griezmans
                 </p>
                    </Col>

                </Row>



            </Container>
        </Fragment >
    );
}
export default Layout;