import React, { useEffect, useState } from 'react'
import {
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  View,
  Animated,
  Modal,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from '@expo/vector-icons/FontAwesome'

import { signUpWithEmail } from '../services/firebase'

import { Header, CustomInput, CustomButton } from '../components'
import { SafeArea, Container, Text, ModalView } from './styles'
import { colors } from '../constants'

export default RegisterScreen = () => {
  const navigation = useNavigation()

  const [ offset ] = useState( new Animated.Value(-75))

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const SignUp = async () => {
    if (name && email && password) {
      if (password.length < 6)
        Alert.alert('Senha Fraca','A senha deve ter no mínimo 6 dígitos')
      else {
        setLoading(true)
        try {
          const response = await signUpWithEmail(name, email, password)
          if (response?.user?.email)
          {
            setSuccess(true)
            setTimeout(() => {
              setLoading(false)
              navigation.navigate("login")
            }, 1000)
          }
        } catch (error) {
          if(error.code === "auth/email-already-in-use")
            Alert.alert('Erro ao Criar Conta','Já existe um usuário com esse email!')
          if(error.code === "auth/invalid-email")
            Alert.alert('ERRO: Email inválido', 'Informe um email válido!')
          setLoading(false)
        }
      }
    } else Alert.alert('Dados em falta','Preencha todos os campos!')
  }

  useEffect(()=> {
    Animated.spring(offset, {
        useNativeDriver: true,
        toValue: 0,
        speed: 6,
        bounciness: 23
    }).start()
  }, [])

  return (
    <SafeArea>
      <Header title="CRIAR CONTA" />

      <Container>
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <Animated.View  style={{ transform: [{translateX: offset}] }}>

            <CustomInput type="name" placeholder="Nome e Sobrenome"
              onChangeText={(value) => setName(value)} />

            <CustomInput type="email" placeholder="Endereço de Email"
              onChangeText={(value) => setEmail(value)} />

            <CustomInput type="password" placeholder="Senha"
              onChangeText={(value) => setPassword(value)}/>

            <CustomButton title="CRIAR CONTA" primary onPress={SignUp} />
          </Animated.View>

        </KeyboardAvoidingView>

        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text marginVertical="20px">Já tem uma conta? Fazer Login</Text>
        </TouchableOpacity>

        <Modal animationType="slide"  transparent visible={loading}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <ModalView>
            { !success ? ( <ActivityIndicator size="large" color={colors.primary} /> ) :
              (
                <View>
                  <Icon name="check" style={{alignSelf: "center"}} size={50} color={colors.primary} />
                  <Text color="#000">Conta criada com sucesso!</Text>
                  <Text color="#000">Faça o login com as suas credenciais..</Text>
                </View>
              )
            }
            </ModalView>
          </View>
        </Modal>
      </Container>
    </SafeArea>
  )
}
