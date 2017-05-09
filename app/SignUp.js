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
import {LogInText, textText} from './textText';

class SignUp extends React.Component {
  static navigationOptions = {
    title: 'SignUp',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {style.View}>
        <PlaneText>Sign-Up</PlaneText>
        <Button onPress={() => { navigate('Home')}} title="Go back!"></Button>
      </View>
    );
  }
}
export default SignUp;
