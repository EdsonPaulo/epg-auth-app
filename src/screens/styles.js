import React from 'react'
import styled from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../constants/colors';

const SafeArea = styled(SafeAreaView)`
  flex: 1
  background-color: ${colors.bgColor}
`;

const Container = styled.View`
  flex: 1
  padding: 20px
  justify-content: ${props => props.justifyContent || 'center' }
`;

const Text = styled.Text`
  margin: 5px
  margin-top: ${props => props.marginVertical || '5px' }
  margin-bottom: ${props => props.marginVertical || '5px' }
  color: ${props => props.color || colors.textPrimary}
  font-size: ${props => props.fontSize || '16px'}
  text-align: ${props => props.textAlign || 'center'}
  font-family: 'Teko_400Regular'
`
const Divider = styled.View`
  flex: 1
  height: 2px
  backgroundColor: #eee
`

export {Container, SafeArea, Text, Divider}
