import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Table} from 'react-bootstrap';
import {listStreams, listAssets} from '../../services'

const Tables = () => {
    
    const [streamData, setStreamData] = useState([])
    const [assetData, setAssetData] = useState([])
    const [newStream, setNewStream] = useState(0)

    useEffect(() => {
        const streamAPI = async () => {
            setStreamData(await listStreams());
        }

        const assetAPI = async () => {
            setAssetData(await listAssets());
        }

        streamAPI();
        assetAPI();
    }, [newStream])

    // console.log(streamData)


    return(
        <Container fluid>
            <Row>
                <Col md="6">
                    <h3>Assets</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Asset Name</th>
                                <th>Asset Quantity</th>
                                <th>Asset Units</th>
                                <th>Asset Reference</th>
                            </tr>
                        </thead>
                        <tbody>
                        {assetData.map((asset, issuetxid) => (
                            <tr key={issuetxid}>
                                <td>{asset.name}</td>
                                <td>{asset.issueqty}</td>
                                <td>{asset.units}</td>
                                <td>{asset.assetref}</td>
                            </tr>
                        ))}
                    </tbody>
                    </Table>
                </Col>
                <Col md="6">
                <h3>Streams</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Stream Name</th>
                            <th>Stream Reference</th>
                            <th>Stream Create ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {streamData.map((stream, createtxid) => (
                            <tr key={createtxid}>
                                <td>{stream.name}</td>
                                <td>{stream.streamref}</td>
                                <td>{stream.createtxid}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default Tables;