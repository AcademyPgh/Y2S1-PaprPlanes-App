import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class SignUp extends React.Component {
  static navigationOptions = {
    title: 'SignUp',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Sign-Up</Text>
        <Button onPress={() => { navigate('Home')}} title="Go back!"></Button>
      </View>
    );
  }
}
export default SignUp;
