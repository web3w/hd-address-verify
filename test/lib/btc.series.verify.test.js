'use strict';

let verify = require("../../lib/btc.series.verify")

let isAddress = require("./base/funtion").isAddress

it("BTC isAddress", async () => {
    let coin = "BTC"
    await isAddress(verify,coin)
})


it("BTC Testnet isAddress", async () => {
    let {address} =await hdAddress.BTC_TEST.getAddress(heIndex)
    let validAddress = await verify(address, "BTC","TEST")
    console.assert(validAddress, "address invalid")
})


it("BCH isAddress", async () => {
    let coin = "BCH"
    await isAddress(verify,coin)
})


it("LTC isAddress", async () => {
    let coin = "LTC"
    await isAddress(verify,coin)
})



