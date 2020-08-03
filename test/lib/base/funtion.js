let hdAddress = require("hd-address").mnemonic()
let hdIndex = 1

module.exports = {
    isAddress: async (verify, coin) => {
        let {address} = await hdAddress[coin].getAddress(hdIndex)
        let validAddress = await verify(address, coin)
        console.assert(validAddress, "address invalid")
        console.log(coin, validAddress, address)
    }
}