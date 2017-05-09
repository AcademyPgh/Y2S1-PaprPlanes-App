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
import style from './style';
import PlaneText from './PlaneText';
import LogInText from './LogInText';
import textText from './textText';
import SignUp1 from './SignUp1';
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
