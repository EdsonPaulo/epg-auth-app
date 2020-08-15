import React from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'

import {colors} from '../constants'

const CustomInput = ({ type, title, ...rest }) => {

  const [secureText, setSecureText] = React.useState(false)
  const [borderColor, setBorderColor] = React.useState(colors.borderColor)

  let keyboardType, iconName
  switch (type) {
    case 'phone': { keyboardType = 'phone-pad', iconName = 'mobile' } break
    case 'password': { keyboardType = 'default', iconName = 'lock' } break
    case 'name': { keyboardType = 'default', iconName = 'user' } break
    case 'email': { keyboardType = 'email-address', iconName = 'mail' } break

    default: keyboardType = iconName = 'default'
  }

  React.useEffect(() => {
    if (type === 'password')
      setSecureText(true)
  }, [])

  return (
    <Container borderColor={borderColor}>
      <AntDesign name={iconName} size={22} color={colors.textPrimary} />
      <TextInput {...rest}
        secureTextEntry={secureText}
        onFocus={() => setBorderColor(colors.textLight)}
        onBlur={() => setBorderColor(colors.borderColor)}
        keyboardType={keyboardType}
        placeholderTextColor={colors.textLight} />
      {
          type === 'password' ?
            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
              {
                secureText ?
                  <Feather size={18} name='eye' color={colors.textPrimary} />
                  :
                  <Feather size={18} name='eye-off' color={colors.textPrimary} />
              }
            </TouchableOpacity>
            : null
        }
    </Container>
  )
}

const Container = styled.View`
  width: 100%
  height: 55px
  background-color: ${colors.secondary}
  border-color: ${props => props.borderColor || colors.borderColor}
  border-radius: 10px
  align-items: center
  flex-direction: row
  padding: 0 20px
  border-width: 1px
  margin: 7px 0
`

const TextInput = styled.TextInput`
  flex: 1
  height: 100%
  color: ${colors.textPrimary}
  font-size: 18px
  text-align: center
  margin: 0 5px
  letter-spacing: 1.1px
  font-family: 'Teko_400Regular'
`

export default CustomInput
