import React from 'react'
import { View, Text } from 'react-native'

import { Header, CustomInput, CustomButton } from "../components"

import { SafeArea, Container } from './styles'

export default LoginScreen = () => {
  return (
    <SafeArea>
      <Header title="ENTRAR" />
      <Container>
        <CustomInput type="email" placeholder="Email" />
        <CustomInput type="password" placeholder="Senha" />
        <CustomButton title="ENTRAR" primary />
      </Container>
    </SafeArea>
  )
}
