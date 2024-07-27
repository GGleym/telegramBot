import { useEffect, useState } from 'react'

import { DEFAULT_RECTANGLES } from '@constants'
import { toggleArrayElement } from '@utils'

import { Styled } from './styled'

import { getWalletConnect, getWalletAuth, getWalletOptions, getWalletNonce } from '@api/example'

export const DefaultBoard = () => {
  const [activeRectangles, setActiveRectangles] = useState<string[]>([])

  useEffect(() => {
    const getAuthorised = async () => {
      const optionsResult = await getWalletOptions()
      const connectResult = await getWalletConnect()
      const nonceResult = await getWalletNonce()
      const result = await getWalletAuth(nonceResult.result.nonce, new Date(nonceResult.date).toISOString())

      console.log(result, connectResult, optionsResult, nonceResult)
    }

    getAuthorised()
  }, [])

  return (
    <Styled.BlocksWrapper>
      {DEFAULT_RECTANGLES.map((rectangle) => (
        <Styled.Block
          isPicked={activeRectangles.includes(rectangle?.id)}
          onClick={() => setActiveRectangles((prevRectangles) => toggleArrayElement(prevRectangles, rectangle?.id))}
        >
          {rectangle?.id}
        </Styled.Block>
      ))}
    </Styled.BlocksWrapper>
  )
}
