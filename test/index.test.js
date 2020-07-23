
(async () => {
    let addrData = require("./lib/base/data")
    let verify = require("../index")
    let foo = verify.BTC(addrData.BTC)
    console.log(foo)
      foo = verify.BTC_TEST(addrData.BTC_TEST)
    console.log(foo)
      foo = verify.ETH(addrData.ETH)
    console.log(foo)
      foo = verify.TRX(addrData.TRX)
    console.log(foo,addrData.TRX)
})()
