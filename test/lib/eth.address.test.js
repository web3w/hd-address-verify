'use strict';

let verify = require("../../lib/eth.verify")
let isAddress = require("./base/funtion").isAddress

it("isAddress", async () => {
    let coin = "ETH"
    await isAddress(verify, coin)
})
