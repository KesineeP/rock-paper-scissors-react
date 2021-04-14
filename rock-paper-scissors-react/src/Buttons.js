import React from 'react';
import { Button, ButtonGroup, Container } from '@material-ui/core';

const Buttons = () => {
    return (
        <Container fixed>
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="text">
                <Button>Rock</Button>
                <Button>Paper</Button>
                <Button>Scissors</Button>
            </ButtonGroup>
        </Container>


    )
}

export default Buttons;