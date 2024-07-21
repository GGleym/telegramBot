import { useState } from 'react'

import { Modal } from '../Modal'

import { Styled } from './styled'

export const Header = () => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false)

  return (
    <>
      <Styled.Header>
        <Styled.Button onClick={() => setIsModalOpened((opened) => !opened)} />
      </Styled.Header>
      <Modal isOpened={isModalOpened} />
    </>
  )
}
