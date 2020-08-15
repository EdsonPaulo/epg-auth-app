import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {
  WelcomeScreen,
  LoginScreen,
  RegisterScreen,
  HomeScreen,
} from '../screens'

import AuthContext from '../contexts/auth/auth-context'

export default index = () => {
  const { isLogged, retrieveToken } = useContext(AuthContext)

  useEffect(() => {
    //recupera o token para verificar se o usuário está logado
    const bootstrapAsync = async () => retrieveToken()
    bootstrapAsync()
  }, [])

  const AuthNavigation = () => {
    const AuthStack = createStackNavigator()
    return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="welcome" component={WelcomeScreen} />
        <AuthStack.Screen name="login" component={LoginScreen} />
        <AuthStack.Screen name="register" component={RegisterScreen} />
      </AuthStack.Navigator>
    )
  }

  const RootStack = createStackNavigator()
  return (
    <NavigationContainer>
      <>
        {
          <RootStack.Navigator screenOptions={{ headerShown: false }}>
            { isLogged ?
              ( <RootStack.Screen name="home" component={HomeScreen} /> )
                :
              ( <RootStack.Screen name="auth" component={AuthNavigation} /> )
            }
          </RootStack.Navigator>
        }
      </>
    </NavigationContainer>
  )
}
