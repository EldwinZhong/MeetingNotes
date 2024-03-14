import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap'; // Import Reactstrap components

class NoteBox extends Component {
    render() {
        return (
            <Card className="note-box">
                <CardHeader>
                    Meeting Notes
                </CardHeader>
                <CardBody className='note-box-content'>
                </CardBody>
            </Card>
        );
    }
}

export default NoteBox;