import React from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

const Cards = () => {

    return(
        <Container fluid>
            <Row>
                <Col md="3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Assets</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md="3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Streams</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md="3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Wallets</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md="3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Balances</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">View</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Cards;