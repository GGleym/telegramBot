import type { PropsWithChildren } from 'react'
import { Styled } from './styled'

type TModalProps = PropsWithChildren<{
  isOpened: boolean
}>

export const Modal = ({ isOpened, children }: TModalProps) => {
  if (!isOpened) {
    return null
  }

  return (
    <Styled.ModalWrapper>
      <Styled.Modal>{children}</Styled.Modal>
    </Styled.ModalWrapper>
  )
}
