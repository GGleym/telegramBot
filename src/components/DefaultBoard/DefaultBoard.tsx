import { useState } from 'react'

import { DEFAULT_RECTANGLES } from '@constants'
import { toggleArrayElement } from '@utils'

import { Styled } from './styled'

export const DefaultBoard = () => {
  const [activeRectangles, setActiveRectangles] = useState<string[]>([])

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
