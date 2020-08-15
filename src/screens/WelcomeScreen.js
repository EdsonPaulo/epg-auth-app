import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { SafeArea, Container } from './styles'
import CustomButton from '../components/CustomButton'

export default WelcomeScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeArea>
      <Container>

      <Text>Bem Vindo</Text>
      <CustomButton
        title="ENTRAR"
        primary
        onPress={() => navigation.navigate('login')}
      />
      <CustomButton title="CRIAR CONTA" onPress={() => navigation.navigate('register')} />
      </Container>

    </SafeArea>
  )
}
