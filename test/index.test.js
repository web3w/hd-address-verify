
import addrData from "./lib/base/data.js"
import verify from "../index.js"


(async () => {
  debugger
  let foo = verify.BTC(addrData.BTC)
  console.log(foo)
  foo = verify.BTC_TEST(addrData.BTC_TEST)
  console.log(foo)
  foo = verify.ETH(addrData.ETH)
  console.log(foo) 
})()
