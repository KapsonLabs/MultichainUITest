import React, {useState, useEffect} from 'react';
import {Navbars, Cards, ListGroups} from '../components';
import {getBlockchainInfo} from '../services'
import "../static/css/dashboard.css"
import {Container, Row} from 'react-bootstrap';



const Dashboard = () => {
  
    const [blockchainData, setBlockchainData] = useState([])
    const [newStream, setNewStream] = useState(0)

    
    useEffect(() => {

        const blockchainInfoAPI = async () => {
            setBlockchainData(await getBlockchainInfo())
        }

        blockchainInfoAPI();
    }, [newStream])

    return (
      <div className="App">
        <Navbars/>

        <Container fluid className="cards-section">
            <Row>
                <Cards name="Assets" number="4" buttonname="View"/>
                <Cards name="Streams" number="3" buttonname="View"/>
                <Cards name="Wallets" number="4" buttonname="View"/>
                <Cards name="Balances" number="10000" buttonname="View"/>
            </Row>
        </Container>
        <ListGroups data={blockchainData}/>
      </div>
    );
  }

export default Dashboard;