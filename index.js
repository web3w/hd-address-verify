import btcSeriesVerify from "./lib/btc.series.verify.js"
import ethVerify from "./lib/eth.verify.js" 

export default {
    "BTC": (address) => btcSeriesVerify(address, "BTC"),
    "BTC_TEST": (address) => btcSeriesVerify(address, "BTC", "TEST"),
    "BCH": (address) => btcSeriesVerify(address, "BCH"),
    "BCH_TEST": (address) => btcSeriesVerify(address, "BCH","TEST"),
    "LTC": (address) => btcSeriesVerify(address, "LTC"),
    "LTC_TEST": (address) => btcSeriesVerify(address, "LTC","TEST"),
    "ETH": (address) => ethVerify(address, "ETH")
}
