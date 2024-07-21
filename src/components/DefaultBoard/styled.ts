import styled from 'styled-components'

import { LOCAL_THEME } from '@constants'

const Block = styled.div<{ isPicked: boolean }>`
  background: ${({ isPicked }) => (isPicked ? LOCAL_THEME.colors.black : LOCAL_THEME.colors.white)};
  border: ${LOCAL_THEME.borders.default}
    ${({ isPicked }) => (isPicked ? LOCAL_THEME.colors.white : LOCAL_THEME.colors.black)};
  width: ${LOCAL_THEME.sizes.lg}px;
  height: ${LOCAL_THEME.sizes.lg}px;
`

const BlocksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`

export const Styled = {
  Block,
  BlocksWrapper,
}
