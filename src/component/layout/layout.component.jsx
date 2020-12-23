import React, { Fragment } from 'react';
import '../../App.css'
import { Avatar, AvatarBadge, Wrap, WrapItem, GridItem, Grid } from "@chakra-ui/react"



const Layout = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-5" xs={3}>
                        <Wrap>
                            <WrapItem>
                                <Avatar size="xs" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" bg="red" >
                                    <AvatarBadge boxSize="1.25em" bg="blue.500" />
                                </Avatar>
                                <small className="edit">
                                    Kylian mbappe
                                         </small>
                            </WrapItem>
                        </Wrap>
                    </div>

                    <div className="col-md-2" xs={4}>
                        <strong> Vs </strong>
                    </div>

                    <div className="col-md-5" xs={3}>
                        <Wrap>
                            <WrapItem>
                                <Avatar size="xs" name="Kent Dodds" src="https://bit.ly/kent-c-dodds">
                                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                                </Avatar>
                                <small className="edit">
                                    Antonine Griezmann
                                         </small>
                            </WrapItem>
                        </Wrap>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}
export default Layout;