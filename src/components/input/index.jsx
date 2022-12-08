import React from 'react'

import { InputContainer, IconContiner, InputText } from './styles'

const Input = ({leftIcon, name, ...rest}) => {
  return (
    <InputContainer>
      {leftIcon ? (<IconContiner>{leftIcon}</IconContiner>) : null}
      <InputText {...rest} />    
    </InputContainer>
  )
}

export {Input}
