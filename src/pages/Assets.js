import React, {useState, useEffect} from 'react';
import {Navbars, Cards, Tables} from '../components';
import {Container, Row} from 'react-bootstrap';

import {listAssets} from '../services'


const Assets = () => {

    const [assetData, setAssetData] = useState([])
    const [newAsset, setNewAsset] = useState(0)

    useEffect(() => {

        const assetAPI = async () => {
            setAssetData(await listAssets());
        }

        assetAPI();
    }, [newAsset])

    const tableData = () => {
        return assetData.map((asset, issuetxid) => (
            <tr key={issuetxid}>
                <td>{asset.name}</td>
                <td>{asset.issueqty}</td>
                <td>{asset.units}</td>
                <td>{asset.assetref}</td>
            </tr>
        ))
    }

    return (
        <div>
            <Navbars/>
            <Container fluid>
                <Row>
                    <Cards name="Assets" number="4" buttonname="View"/>
                    <Cards name="Asset Value" number="30000" buttonname="View"/>
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Tables title="Assets"  param1="Asset Name" param2="Asset Issue Qty"
                    param3="Asset Units" param4="Asset Reference" tableData={tableData()}
                    />
                </Row>
            </Container>
        </div>
    )
}

export default Assets;