import React, { useContext } from 'react'
import { Platform, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Header, CustomInput, CustomButton } from "../components"
import { SafeArea, Container, Text } from './styles'
import { colors } from '../constants'

import authContext from "../contexts/auth/auth-context"

export default RegisterScreen = () => {

  const navigation = useNavigation()
  const { register } = useContext(authContext)

  const SignUp = () => {

    register({name: "Edson Paulo Gregório"}, "fake-token")
  }

  return (
    <SafeArea>
      <Header title="CRIAR CONTA" />
      <Container>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <CustomInput type="name" placeholder="Nome e Sobrenome" />
          <CustomInput type="email" placeholder="Endereço de Email" />
          <CustomInput type="password" placeholder="Senha de Acesso" />
          <CustomButton title="CRIAR CONTA" primary onPress={SignUp} />
        </KeyboardAvoidingView>

        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text marginVertical="20px">Já tem uma conta? Fazer Login</Text>
        </TouchableOpacity>
      </Container>
    </SafeArea>
  )
}
