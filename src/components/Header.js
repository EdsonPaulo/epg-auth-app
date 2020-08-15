import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from '@expo/vector-icons/AntDesign'
import styled from 'styled-components/native'

import colors from '../constants/colors'

const Header = ({ title }) => {
  const navigation = useNavigation()

  return (
    <Container>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <Icon name="swapleft" size={30} color="#fff" />
      </TouchableOpacity>
      <Text>{title}</Text>
    </Container>
  )
}

const Container = styled.View`
  width: 100%
  height: 40px
  border-radius: 3px
  border-right-width: 3px
  border-right-color: #fff
  justify-content: space-between
  align-items: center
  flex-direction: row
  padding: 0 15px
  margin-top: 20px
`

const Text = styled.Text`
  color: ${colors.textPrimary}
  font-size: 22px
  letter-spacing: 1.5px
  margin-right: 10px
  font-family: 'Teko_700Bold'
`

export default Header
