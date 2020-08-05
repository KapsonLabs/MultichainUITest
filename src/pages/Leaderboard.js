import React, {useState, useEffect} from 'react';
import {Navbars, Cards, Tables} from '../components';
import {Container, Row} from 'react-bootstrap';

import {listLeaderboard} from '../services'


const Leaderboard = () => {

    const [leaderData, setLeaderData] = useState([])
    const [newAsset, setNewAsset] = useState(0)

    useEffect(() => {

        const leaderAPI = async () => {
            setLeaderData(await listLeaderboard());
        }

        leaderAPI();
    }, [])

    const tableData = () => {
        return leaderData.map((leader, name) => (
            <tr key={name}>
                <td>{leader.name}</td>
                <td>{leader.address}</td>
                <td>{leader.score}</td>
                <td>Actions</td>
            </tr>
        ))
    }

    return (
        <div>
            <Navbars/>
            <Container fluid>
                <Row>
                    <Cards name="Quiz Token" number="100000" buttonname="View"/>
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Tables title="LeaderBoard"  param1="Name" param2="Address"
                    param3="Quiz Score" param4="Actions" tableData={tableData()}
                    />
                </Row>
            </Container>
        </div>
    )
}

export default Leaderboard;