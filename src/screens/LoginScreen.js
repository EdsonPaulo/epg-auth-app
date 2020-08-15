import React, { useContext, useState } from 'react'
import { View, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Header, CustomInput, CustomButton } from '../components'
import { SafeArea, Container, Text, Divider} from './styles'
import { colors } from '../constants'

import authContext from "../contexts/auth/auth-context"

export default LoginScreen = () => {

  const navigation = useNavigation()
  const { login } = useContext(authContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const SignIn = () => {

    login({name: "Edson Paulo Gregório"}, "fake-token")
  }

  return (
    <SafeArea>
      <Header title="ENTRAR" />
      <Container>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <CustomInput type="email" placeholder="edson@example.com" onChangeText={value => setEmail(value)} />
          <CustomInput type="password" placeholder="*********" onChangeText={value => setPassword(value)} />
          <TouchableOpacity>
            <Text textAlign="right">Esqueceu a sua senha?</Text>
          </TouchableOpacity>
          <CustomButton title="ENTRAR" primary onPress={SignIn} />
        </KeyboardAvoidingView>

        <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
          <Divider /> <Text>Ou</Text> <Divider />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("register")}>
          <Text marginVertical="20px">Não tem uma conta? Criar uma conta</Text>
        </TouchableOpacity>
      </Container>
    </SafeArea>
  )
}
