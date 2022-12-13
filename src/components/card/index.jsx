import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture
} from './styles'

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xqRvDOUzYHlEUuD0bbx9DKA3N6UJukCLow&usqp=CAU' />
      <Content>
        <UserInfo>
          <UserPicture src='https://github.com/mrwendellbarros.png' />
          <div>
          <h4>Wendell Gabriel</h4>
          <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>Projeto feito no curso de html e css no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export {Card }