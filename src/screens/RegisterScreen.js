import React from 'react'
import { Text } from 'react-native'

import { SafeArea, Container } from './styles'

import { Header, CustomInput, CustomButton } from "../components"

export default RegisterScreen = () => {
  return (
    <SafeArea>
      <Header title="CRIAR CONTA" />
      <Container>
        <CustomInput type="name" placeholder="Nome" />
        <CustomInput type="email" placeholder="Email" />
        <CustomInput type="password" placeholder="Senha" />
        <CustomButton title="CRIAR CONTA" primary />
      </Container>
    </SafeArea>
  )
}
