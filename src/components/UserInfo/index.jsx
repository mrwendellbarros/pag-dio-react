import React from 'react'

import {Container, NameText, Progres, UserPicture} from './styles'

const UserInfo = (nome, image, percentual) => {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{nome}</NameText>
        <Progres percentual={percentual} />
      </div>
    </Container>
  )
}

export {UserInfo}
