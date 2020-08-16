import React, { useReducer, useMemo } from 'react'
import { AsyncStorage } from 'react-native'

import AuthContext from './auth-context'
import {
  authReducer,
  LOGIN,
  LOGOUT,
  RETRIEVE_TOKEN,
} from './auth-reducer'
import { constants } from '../../constants'

const AuthProvider = (props) => {
  const [authState, dispatch] = useReducer(authReducer, {
    user: null,
    token: null,
    isLogged: false,
    isLoading: true,
  })

  const login = async (user, token) => {
    try {
      await AsyncStorage.multiSet([
        [constants.USER_KEY, JSON.stringify(user)],
        [constants.TOKEN_KEY, token],
      ])
      dispatch({ type: LOGIN, user, token })
    } catch (error) {
      throw new Error(error)
    }
  }

  const logout = async () => {
    try {
      await AsyncStorage.multiRemove([constants.TOKEN_KEY, constants.USER_KEY])
      dispatch({ type: LOGOUT })
    } catch (error) {
      throw new Error(error)
    }
  }

  const retrieveToken = async () => {
    let user, token
    try {
      token = await AsyncStorage.getItem(constants.TOKEN_KEY)
      user = await AsyncStorage.getItem(constants.USER_KEY)
    } catch (e) { }
    dispatch({ type: RETRIEVE_TOKEN, token, user })
  }

  const value = useMemo(() => {
    return {
      user: authState.user,
      token: authState.token,
      isLogged: !!authState.token,
      isLoading: authState.isLoading,

      login,
      logout,
      retrieveToken,
    }
  })

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  )
}

export default AuthProvider
