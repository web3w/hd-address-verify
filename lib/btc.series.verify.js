import * as  bitcoinJs from 'bitcoinjs-lib';

function checkAddress(address, network) {
    try {
        return bitcoinJs.address.toOutputScript(address, network)
    } catch (err) {
        throw ("btc address error: " + address)
    }
}

// validate (address [, currency = 'bitcoin'[, networkType = 'prod']])
// address - Wallet address to validate.
// currency - Optional. Currency name or symbol, e.g. 'bitcoin' (default), 'litecoin' or 'LTC'
// networkType - Optional. Use 'prod' (default) to enforce standard address, 'testnet' to enforce testnet address and 'both' to enforce nothing.
let isBtcSeriesAddress = (address, coin = "BTC", network = "bitcion") => {
    const net = network == "bitcion"
        ? bitcoinJs.networks.bitcoin
        : bitcoinJs.networks.testnet
    return checkAddress(address, net);
}

export default (address, coin, network) => {
    return isBtcSeriesAddress(address, coin, network)

}

