import axios from 'axios';

const url = 'https://mc2.cryptosavannah.com'

export const getBlockchainInfo = async () => {
    try {
        const {data: {chainname, port, nodeaddress, burnaddress, blocks}} = await axios.get(`${url}/info`)
        return {chainname, port, nodeaddress, burnaddress, blocks}
    } catch(error){
        console.log(error)
    }
}

export const listStreams = async () => {
    try {
        const {data} =  await axios.get(`${url}/stream/list`)
        return data
    } catch(error){
        console.log(error)
    }
}

export const listAssets = async () => {
    try {
        const {data} =  await axios.get(`${url}/asset/list`)
        return data
    } catch(error){
        console.log(error)
    }
}

export const listAddresses = async () => {
    try {
        const {data} =  await axios.get(`${url}/address/list`)
        return data
    } catch(error){
        console.log(error)
    }
}

export const listLeaderboard = async () => {
    try {
        const {data} =  await axios.get(`${url}/leaderboard/list`)
        return data
    } catch(error){
        console.log(error)
    }
}

