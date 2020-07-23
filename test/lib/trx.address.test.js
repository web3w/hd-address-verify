'use strict';

let verify = require("../../lib/trx.verify")
let isAddress = require("./base/funtion").isAddress

it("TRX isAddress", async () => {

    let coin = "TRX"
    await isAddress(verify, coin)
})