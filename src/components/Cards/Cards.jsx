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
                            4
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
                            3
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
                            4
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
                            100,000
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