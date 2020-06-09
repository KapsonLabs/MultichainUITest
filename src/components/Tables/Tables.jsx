import React from 'react';
import {Container, Row, Col, Table} from 'react-bootstrap';

const Tables = (props) => {

    const tableStyles = {
        margin: '30px'
    }

    return(
        <Container fluid style={tableStyles}>
            <Row>
                <Col md="12">
                    <h3>{props.title}</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>{props.param1}</th>
                                <th>{props.param2}</th>
                                <th>{props.param3}</th>
                                <th>{props.param4}</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* {assetData.map((asset, issuetxid) => (
                            <tr key={issuetxid}>
                                <td>{asset.name}</td>
                                <td>{asset.issueqty}</td>
                                <td>{asset.units}</td>
                                <td>{asset.assetref}</td>
                            </tr>
                        ))} */}
                        {props.tableData}

                    </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default Tables;