import Web3 from 'web3';
const web3 = new Web3()


export default (address) => {
    return   web3.utils.isAddress(address) 
}

