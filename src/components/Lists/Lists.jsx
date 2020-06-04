import React, {useState, useEffect} from 'react';
import {Container, Row, Col, ListGroup} from 'react-bootstrap';
import {listAddresses} from '../../services'


const ListGroups = ({data: {chainname, port, nodeaddress, burnaddress, blocks}}) => {

    const [addressData, setAddressData] = useState([]);
    const [newAddress, setNewAddress] = useState(0);

    useEffect(() => {
        const addressAPI = async () => {
            setAddressData(await listAddresses());
        }

        addressAPI();

    }, [newAddress])


    return(
    <Container fluid>
        <Row>
            <Col md="6">
                <h3>Blockchain Information</h3>
                <ListGroup>
                    <ListGroup.Item>ChainName: {chainname}</ListGroup.Item>
                    <ListGroup.Item>Port: {port}</ListGroup.Item>
                    <ListGroup.Item>Node Address: {nodeaddress}</ListGroup.Item>
                    <ListGroup.Item>Burn Address: {burnaddress}</ListGroup.Item>
                    <ListGroup.Item>Blocks: {blocks}</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md="6">
                <h3>Address List</h3>
                <ListGroup>
                    {addressData.map((address, id) => (
                        <ListGroup.Item key={id}>{id}. {address.address}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
        </Row>
    </Container>
    )
}

export default ListGroups;