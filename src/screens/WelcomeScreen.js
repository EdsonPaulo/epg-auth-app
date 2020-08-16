import React from 'react'
import { View, Image, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { SafeArea, Container, Text } from './styles'
import CustomButton from '../components/CustomButton'
import logo from '../../assets/Logo.png'

export default WelcomeScreen = () => {
  const navigation = useNavigation()

  const [ offset ] = React.useState( new Animated.Value(75))

  React.useEffect(()=> {
    Animated.spring(offset, {
        useNativeDriver: true,
        toValue: 0,
        speed: 6,
        bounciness: 23
    }).start()
  }, [])

  return (
    <SafeArea>
      <Container>
        <Image resizeMode="contain" style={{ width: '100%', flex: 1/2 }} source={logo} />

        <Text fontSize="24px">Bem Vindo ao EPG Auth</Text>

        <Animated.View style={{flex: 1/2, justifyContent: "center", transform: [{translateY: offset}]}}>
          <CustomButton title="ENTRAR" primary
            onPress={() => navigation.navigate('login')} />
          <CustomButton title="CRIAR CONTA"
            onPress={() => navigation.navigate('register')} />

          <Text fontSize="14px" marginVertical="20px">© 2020 - EPG Tech by EdsonPaulo</Text>
        </Animated.View>
      </Container>
    </SafeArea>
  )
}
