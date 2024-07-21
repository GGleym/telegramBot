import { LOCAL_THEME } from '@constants/local-theme'
import styled from 'styled-components'

const ModalWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  opacity: 0.3;
`

const Modal = styled.div`
  width: ${LOCAL_THEME.sizes.xl2};
  height: ${LOCAL_THEME.sizes.xl2};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${LOCAL_THEME.colors.white};
`

export const Styled = {
  Modal,
  ModalWrapper,
}
