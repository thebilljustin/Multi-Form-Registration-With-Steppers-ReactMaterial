import React, { Component, Fragment } from 'react'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core/'


export class Success extends Component {
    render() {
        return (
            <Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">Confirm User Data</Typography>
                    </Toolbar>
                </AppBar>
                <Container style={{marginTop: 40}}>
                    <Typography variant="h4">Thank you for signing up</Typography>
                    <br />
                    <Typography variant="subtitle1">Check your email to set-up your account</Typography>
                </Container>
            </Fragment>
        )
    }
}


export default Success
