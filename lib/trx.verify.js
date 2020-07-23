const TronWeb = require('tronweb');

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("h");
const tronWeb = new TronWeb(fullNode, fullNode);

module.exports = (address) => {
    return tronWeb.isAddress(address)
}

