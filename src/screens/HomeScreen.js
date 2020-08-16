import React, { useContext } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/AntDesign'

import authContext from '../contexts/auth/auth-context'

import { SafeArea, Container, Text } from './styles'
import { colors } from '../constants'
import logo from '../../assets/Logo.png'

export default HomeScreen = () => {
  const { logout, user } = useContext(authContext)

  return (
    <SafeArea>
      <Container justifyContent="space-between">
        <Image resizeMode="contain" style={{ width: '100%' }} source={logo} />

        <View>
          <Text fontSize="22px">Olá, {user?.displayName || user?.email}</Text>
          <Text fontSize="18px">
            Esse é um app demo de fluxo de autenticação feito por @EdsonPaulo
          </Text>
        </View>

        <TouchableOpacity onPress={() => logout()}>
          <Icon
            name="logout"
            style={{ textAlign: 'center' }}
            color={colors.primary}
            size={40}
          />
        </TouchableOpacity>
      </Container>
    </SafeArea>
  )
}
