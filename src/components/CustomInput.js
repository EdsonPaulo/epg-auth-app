import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from '@expo/vector-icons/Feather'
import styled from 'styled-components/native'

import {colors, fonts} from '../constants'

const CustomInput = ({ type, title, ...rest }) => {

  const [secureText, setSecureText] = React.useState(false)
  const [borderColor, setBorderColor] = React.useState(colors.borderColor)

  let keyboardType, iconName
  switch (type) {
    case 'phone': { keyboardType = 'phone-pad', iconName = 'smartphone' } break
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
    <Container>
      <Icon name={iconName} size={20} color={colors.textPrimary} />
      <TextInput {...rest}
        secureTextEntry={secureText}
        onFocus={() => setBorderColor(colors.primary)}
        onBlur={() => setBorderColor(colors.borderColor)}
        keyboardType={keyboardType}
        placeholderTextColor={colors.textLight} />
      {
          type === 'password' ?
            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
              {
                secureText ?
                  <Icon size={16} name='eye' color={colors.textPrimary} />
                  :
                  <Icon size={16} name='eye-off' color={colors.textPrimary} />
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
  font-size: 16px
  margin: 0 10px
  letter-spacing: 1.1px
  font-family: 'Teko_400Regular'
`

export default CustomInput
