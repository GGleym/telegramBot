// import * as bitcoin from 'bitcoinjs-lib'
// import { ECPairFactory, ECPairAPI } from 'ecpair'
// import * as tinysecp from 'tiny-secp256k1'

// const privateKeyWIF = 'L5CrWaQMhMep7RzVgR4gZE1DmJj6eyHirEBV2DxWqVyqTfSnV7Vp'

// const ECPair: ECPairAPI = ECPairFactory(tinysecp)

// export const signMessage = (message: Buffer) => {
// const messageHashHex = bitcoin.crypto.sha256(message)
// const keyPair = ECPair.fromWIF(privateKeyWIF)
// const messageHashBuffer = bitcoin.Block.fromHex(messageHashHex)
// const signature = keyPair.sign(messageHashBuffer)
// console.log(signature)
// return signature.toDER().toString('hex')
// }
