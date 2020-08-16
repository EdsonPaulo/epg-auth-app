import React, { useContext, useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  Modal,
  View,
  ActivityIndicator,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from '@expo/vector-icons/FontAwesome'

import authContext from '../contexts/auth/auth-context'
import { Header, CustomInput, CustomButton } from '../components'
import {
  SafeArea,
  Container,
  Text,
  Divider,
  RowView,
  ModalView,
  SocialButton,
} from './styles'

import { firebase, signInWithEmail } from '../services/firebase'

export default LoginScreen = () => {
  const navigation = useNavigation()
  const { login } = useContext(authContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const SignIn = async () => {
    if (email && password) {
      if (password.length < 6)
        Alert.alert('Senha errada', 'A senha tem 6 ou mais dígitos')
      else {
        setLoading(true)
        try {
          const response = await signInWithEmail(email, password)
          if (response) {
            const user = {
              email: response.user.providerData[0].email,
              name: response.user.providerData[0].displayName,
            }
            const token = response.user.uid //Token falso, somente para simulação..
            setLoading(false)
            console.log(user, token)
            login(user, token)
          }
        } catch (error) {
            if(error.code === "auth/invalid-email")
              Alert.alert('ERRO: Email inválido', 'Informe um email válido!')
            if(error.code === "auth/user-not-found")
              Alert.alert('ERRO: Usuário Inexistente', 'Esse usuário não existe!')
            setLoading(false)
        }
      }
    } else Alert.alert('Dados em falta', 'Preencha todos os campos!')
  }

  return (
    <SafeArea>
      <Header title="ENTRAR" />
      <Container>
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <CustomInput type="email" placeholder="edson@example.com"
            onChangeText={(value) => setEmail(value)} />

          <CustomInput type="password" placeholder="*********"
            onChangeText={(value) => setPassword(value)} />

          <TouchableOpacity>
            <Text textAlign="right">Esqueceu a sua senha?</Text>
          </TouchableOpacity>

          <CustomButton title="ENTRAR" primary onPress={SignIn} />
        </KeyboardAvoidingView>

        <RowView>
          <Divider />
          <Text>Ou</Text>
          <Divider />
        </RowView>

        <RowView>
          <SocialButton backgroundColor="#1C5AEB" onPress={() => Alert.alert('Em Breve', 'Funcionalidade em falta!')}>
            <Icon name="facebook" size={25} color="#eee" />
          </SocialButton>
          <SocialButton onPress={() => Alert.alert('Em Breve', 'Funcionalidade em falta!')}>
            <Icon name="google" size={25} color="#eee" />
          </SocialButton>
        </RowView>

        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <Text marginVertical="20px">Não tem uma conta? Criar uma conta</Text>
        </TouchableOpacity>

        <Modal animationType="slide" transparent visible={loading}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <ModalView>
              <ActivityIndicator size="large" color="#EE0148" />
            </ModalView>
          </View>
        </Modal>
      </Container>
    </SafeArea>
  )
}
