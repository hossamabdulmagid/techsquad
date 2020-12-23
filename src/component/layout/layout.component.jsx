import React, { Fragment } from 'react';
import '../../App.css'
import { Avatar, AvatarBadge, Wrap, WrapItem, GridItem, Grid } from "@chakra-ui/react"



const Layout = () => {
    return (
        <Fragment>
            <Grid templateColumns="repeat(5, 1fr)" gap={4} >
                <GridItem colSpan={2} h="40px" bg="#000000" border-radius="8px" p="3px" w='160px' >
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
                </GridItem>
                vs
                <GridItem colStart={4} colEnd={6} h="40px" w="120px" border-radius="8px" bg="#000000" p="3px" w='160px'>
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
                </GridItem>
            </Grid>
        </Fragment>
    );
}
export default Layout;