let WAValidator = require('wallet-address-validator');


// validate (address [, currency = 'bitcoin'[, networkType = 'prod']])
// address - Wallet address to validate.
// currency - Optional. Currency name or symbol, e.g. 'bitcoin' (default), 'litecoin' or 'LTC'
// networkType - Optional. Use 'prod' (default) to enforce standard address, 'testnet' to enforce testnet address and 'both' to enforce nothing.
let isBtcSeriesAddress = (address, coin="BTC", network = "prod") => {
    coin = coin && coin.toUpperCase()
    network = network.toLowerCase() == "test" ? "testnet" : "prod"
    return WAValidator.validate(address, coin, network);
}

module.exports = (address, coin, network) => {
    return isBtcSeriesAddress(address, coin, network)

}

