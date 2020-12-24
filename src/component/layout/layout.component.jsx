import React, { Fragment } from 'react';
import '../../App.css'
import { Avatar, AvatarBadge, Wrap, WrapItem, GridItem, Grid } from "@chakra-ui/react"
import { Container, Row, Col } from 'react-bootstrap'


const Layout = () => {

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col xs={5} md={4} className="styled">
                        <div className="User">
                            <div className="roundblue"></div>
                            <Avatar size="xs" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                            <small className="UserName">
                                Kylian mbappe
                            </small>
                        </div>
                    </Col>
                    <Col xs={2} md={4} className="styled"><small>vs</small></Col>
                    <Col xs={5} md={4} className="styled">
                        <div className="User">
                            <div className="roundgreen"></div>
                            <Avatar size="xs" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                            <small className="UserName">
                                Antonine Griezmans
                            </small>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}
export default Layout;