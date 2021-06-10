import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

import colors from '../constants/colors'

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.bgColor};
`
const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: ${(props) => props.justifyContent || 'center'};
`
const Text = styled.Text`
  margin: 5px;
  margin-top: ${(props) => props.marginVertical || '5px'};
  margin-bottom: ${(props) => props.marginVertical || '5px'};
  color: ${(props) => props.color || colors.textPrimary};
  font-size: ${(props) => props.fontSize || '20px'};
  text-align: ${(props) => props.textAlign || 'center'};
  font-family: 'Teko_400Regular';
`
const Divider = styled.View`
  flex: 1;
  height: 1px;
  margin: 0 5px;
  background-color: #eee;
`
const RowView = styled.View`
  flex-direction: row;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
`

const ModalView = styled.View`
  width: 70%;
  height: 70%;
  border-radius: 10px
  alignSelf: center
  backgroundColor: #fff
  justify-content: center
  alignItems: center
`

const SocialButton = styled.TouchableOpacity`
  background-color: ${(props) => props.backgroundColor || colors.primary}
  width: 50px
  height: 50px
  border-radius: 20px
  margin: 5px 15px
  justify-content: center
  alignItems: center
`

export { Container, SafeArea, Text, Divider, RowView, SocialButton, ModalView }
