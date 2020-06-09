import React from 'react';
import {Col, Card, Button} from 'react-bootstrap';


const Cards = (props) => {

    return(
        
        <Col md="3">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                    {props.number}
                    </Card.Text>
                    <Button variant="primary">{props.buttonname}</Button>
                </Card.Body>
            </Card>
        </Col>               
    )
}

export default Cards;