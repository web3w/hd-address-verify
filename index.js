let btcSeriesVerify = require("./lib/btc.series.verify")
let ethVerify = require("./lib/eth.verify")
let trxVerify = require("./lib/trx.verify")

module.exports = {
    "BTC": (address) => btcSeriesVerify(address, "BTC"),
    "BTC_TEST": (address) => btcSeriesVerify(address, "BTC", "TEST"),
    "BCH": (address) => btcSeriesVerify(address, "BCH"),
    "LTC": (address) => btcSeriesVerify(address, "LTC"),
    "ETH": (address) => ethVerify(address, "ETH"),
    "TRX": (address) => trxVerify(address, "TRX"),
}
