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
`;


export {Container, SafeArea}
