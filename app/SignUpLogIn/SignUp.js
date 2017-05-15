import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import style from '../styles/style';
import {PlaneText, PlaneText2, textText, LogInText} from '../styles/PlaneText';
import SignUp2 from './SignUp2';

class SignUp extends React.Component {
  static navigationOptions = {
    title: 'SignUp',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {style.View}>
        <PlaneText>Sign-Up</PlaneText>
        <Button onPress={() => { navigate('SignUp2')}} title="Go Sign-Up!"></Button>
      </View>
    );
  }
}
export default SignUp;
