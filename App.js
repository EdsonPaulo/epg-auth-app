import React from 'react'
import { AppLoading } from 'expo'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  useFonts,
  Teko_300Light,
  Teko_400Regular,
  Teko_500Medium,
  Teko_600SemiBold,
  Teko_700Bold
} from '@expo-google-fonts/teko'

import AuthProvider from "./src/contexts/auth/auth-provider"
import Router from './src/routes'

export default function App() {
  let [fontsLoaded] = useFonts({
    Teko_300Light,
    Teko_400Regular,
    Teko_500Medium,
    Teko_600SemiBold,
    Teko_700Bold
  })

  if (!fontsLoaded) return <AppLoading />
  else
    return (
      <AuthProvider>
        <SafeAreaProvider>
          <Router />
        </SafeAreaProvider>
      </AuthProvider>
    )
}
