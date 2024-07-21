import { LOCAL_THEME } from '@constants/local-theme'
import styled from 'styled-components'

const Header = styled.div`
  min-height: ${LOCAL_THEME.sizes.xl3}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button``

export const Styled = {
  Header,
  Button,
}
