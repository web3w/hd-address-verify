const Web3 = require('web3');
const web3 = new Web3()


module.exports = (address) => {
    return   web3.utils.isAddress(address)


}

