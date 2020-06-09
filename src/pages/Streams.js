import React, {useEffect, useState} from 'react';
import {Navbars, Cards, Tables} from '../components';
import {Container, Row} from 'react-bootstrap';
import {listStreams} from '../services'

const Streams = () => {

    const [streamData, setStreamData] = useState([])
    const [newStream, setNewStream] = useState(0)

    useEffect(() => {
        const streamAPI = async () => {
            setStreamData(await listStreams());
        }

        streamAPI();
    }, [newStream])

    const tableData = () => {
        return streamData.map((stream, createtxid) => (
            <tr key={createtxid}>
                <td>{stream.name}</td>
                <td>{stream.streamref}</td>
                <td>{stream.createtxid}</td>
                <td>{stream.items}</td>
        </tr>))
    }

    return (
        <div>
            <Navbars/>
            <Container fluid>
                <Row>
                    <Cards name="Streams" number="4" buttonname="View"/>
                    <Cards name="Stream Items" number="3" buttonname="View"/>
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Tables title="Streams"  param1="Stream Name" param2="Stream Reference"
                    param3="Create Tx Id" param4="Actions" tableData={tableData()}
                    />
                </Row>
            </Container>
        </div>
    )
}

export default Streams;