const connectRaw = JSON.stringify({
  address: 'bc1q5pe6tcsm76v7dukwzurq4gzeus5yhv7a0xp5cr',
  chain: 'BTC',
  provider: 'browserExtension',
  walletName: 'unisat',
  authMode: 'connect-and-sign',
})

const connectHeaders = new Headers()

connectHeaders.append('x-dyn-api-version', 'API/0.0.497')
connectHeaders.append('sec-ch-ua', '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"')
connectHeaders.append('Content-Type', 'application/json')
connectHeaders.append('Referer', 'https://magiceden.io/')
connectHeaders.append('x-dyn-version', 'WalletKit/2.3.6')
connectHeaders.append('sec-ch-ua-mobile', '?0')
connectHeaders.append(
  'User-Agent',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
)
connectHeaders.append('sec-ch-ua-platform', '"Windows"')
connectHeaders.append('Accept', '*/*')
connectHeaders.append('Sec-Fetch-Site', 'same-site')
connectHeaders.append('Sec-Fetch-Mode', 'cors')
connectHeaders.append('Sec-Fetch-Dest', 'empty')

connectHeaders.append('host', 'auth.magiceden.io')

const myHeaders = new Headers()

myHeaders.append('Accept', '*/*')
myHeaders.append('Referer', 'https://magiceden.io/')
myHeaders.append('Access-Control-Request-Method', 'GET')
myHeaders.append('Access-Control-Request-Headers', 'authorization')
myHeaders.append(
  'User-Agent',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
)
myHeaders.append('Sec-Fetch-Mode', 'cors')
myHeaders.append('Sec-Fetch-Site', 'same-site')
myHeaders.append('Sec-Fetch-Dest', 'empty')
myHeaders.append('host', 'api-mainnet.magiceden.io')

export const getWalletOptions = async () => {
  try {
    const result = await fetch(
      'https://api-mainnet.magiceden.io/auth/user/bc1q5pe6tcsm76v7dukwzurq4gzeus5yhv7a0xp5cr?enableSNS=undefined',
      {
        method: 'OPTIONS',
        headers: myHeaders,
        redirect: 'follow',
      }
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error))

    return result
  } catch (e) {
    console.error(e)
  }
}

export const getWalletConnect = async () => {
  try {
    const result = await fetch('https://auth.magiceden.io/api/v0/sdk/c1314b5b-ece8-4b4f-a879-3894dda364e4/connect', {
      method: 'POST',
      headers: connectHeaders,
      body: connectRaw,
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error))

    return result
  } catch (e) {
    console.error(e)
  }
}

export const getWalletAuth = async (nonce: string, date: string) => {
  const messageToSign = `magiceden.io wants you to sign in with your Bitcoin account:\nbc1q5pe6tcsm76v7dukwzurq4gzeus5yhv7a0xp5cr\n\nWelcome to Magic Eden. Signing is the only way we can truly know that you are the owner of the wallet you are connecting. Signing is a safe, gas-less transaction that does not in any way give Magic Eden permission to perform any transactions with your wallet.\n\nURI: https://magiceden.io/popular-collections\nVersion: 1\nNonce: ${nonce}\nIssued At: ${date}\nRequest ID: c1314b5b-ece8-4b4f-a879-3894dda364e4`

  const verifyRaw = JSON.stringify({
    signedMessage: '',
    messageToSign,
    publicWalletAddress: 'bc1q5pe6tcsm76v7dukwzurq4gzeus5yhv7a0xp5cr',
    chain: 'BTC',
    walletName: 'unisat',
    walletProvider: 'browserExtension',
    network: 'undefined',
    additionalWalletAddresses: [
      {
        address: 'bc1q5pe6tcsm76v7dukwzurq4gzeus5yhv7a0xp5cr',
        publicKey: '02784059a4af83926ddcf8017547eee226602cc7bf553b95a1439a30701a8871a0',
        type: 'ordinals',
      },
    ],
  })

  try {
    const result = await fetch('https://auth.magiceden.io/api/v0/sdk/c1314b5b-ece8-4b4f-a879-3894dda364e4/verify', {
      method: 'POST',
      headers: connectHeaders,
      body: verifyRaw,
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error))

    return result
  } catch (e) {
    console.error(e)
  }
}

const nonceHeaders = new Headers()

nonceHeaders.append('x-dyn-api-version', 'API/0.0.497')
nonceHeaders.append('sec-ch-ua', '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"')
nonceHeaders.append('Content-Type', 'application/json')
nonceHeaders.append('x-dyn-version', 'WalletKit/2.3.6')
nonceHeaders.append('sec-ch-ua-mobile', '?0')
nonceHeaders.append(
  'User-Agent',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
)
nonceHeaders.append('sec-ch-ua-platform', '"Windows"')
nonceHeaders.append('Accept', '*/*')
nonceHeaders.append('Sec-Fetch-Site', 'same-site')
nonceHeaders.append('Sec-Fetch-Mode', 'cors')
nonceHeaders.append('Sec-Fetch-Dest', 'empty')
nonceHeaders.append('host', 'auth.magiceden.io')
nonceHeaders.append(
  'Cookie',
  '__cf_bm=kCC4_ig5ipkhIfe7dThaH5S.dUzE6FbO4tOM_rsdhhU-1722067304-1.0.1.1-tXQxNsuDIs5h2C8UOaIvfkYDUuO.pQfwTA4JYMdUjP5SQLTfE9oh7_7xoC8S2ifBXugSRGwyiy.TA_rbADqovQ'
)

export const getWalletNonce = async () => {
  try {
    const result = await fetch('https://auth.magiceden.io/api/v0/sdk/c1314b5b-ece8-4b4f-a879-3894dda364e4/nonce', {
      method: 'GET',
      headers: nonceHeaders,
    })

    return {
      result: await result.json(),
      date: result.headers.get('Date'),
    }
  } catch (e) {
    console.error(e)
  }
}
