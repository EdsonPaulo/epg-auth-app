import React from 'react'
import styled from 'styled-components/native'
import Icon from '@expo/vector-icons/Ionicons'

import { RectButton } from 'react-native-gesture-handler'
import colors from '../constants/colors'

const CustomButton = ({ primary, title, icon, ...rest }) => {
  return (
    <Button {...rest} primary={primary}>
      <Text primary={primary}>{title}</Text>
      {icon && (
        <Icon
          size={20}
          name={icon}
          color={primary ? colors.textPrimary : colors.textSecondary}
        />
      )}
    </Button>
  )
}

const Text = styled.Text`
  color: ${(props) =>
    props.primary ? colors.textPrimary : colors.textSecondary}
  font-size: 20px
  letter-spacing: 1px
  font-family: 'Teko_500Medium'
  margin: 0 10px
`
const Button = styled(RectButton)`
  background-color: ${(props) => (props.primary ? colors.primary : '#fff')}
  border-radius: 8px
  border-top-left-radius: 10px
  height: 50px
  flex-direction: row
  justify-content: center
  align-items: center
  margin: 10px 0
`

export default CustomButton
