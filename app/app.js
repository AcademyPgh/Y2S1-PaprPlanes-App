import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { StackNavigator } from 'react-navigation';
import Main from './Main';
import SignUp from './SignUp';
import LogIn from './LogIn';
import CreateTextPost from './CreateTextPost'
import CreateLinkPost from './CreateLinkPost'
import CreatePicPost from './CreatePicPost'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Greeting Screen',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>

        <Button onPress={() => { navigate('LogIn')}} title="LogIn"></Button>
        <Button onPress={() => { navigate('SignUp')}} title="SignUp"></Button>
      {/*test button will remove later*/}
        <Button onPress={() => { navigate('Main')}} title="Main Screen"></Button>
      </View>
    );
  }
}

const PaprPlanes = StackNavigator({
  Home: { screen: HomeScreen },
  LogIn: {screen: LogIn },
  SignUp: {screen: SignUp },
  Main: {screen: Main },
  CreateTextPost: { screen: CreateTextPost },
  CreateLinkPost: { screen: CreateLinkPost },
  CreatePicPost: { screen: CreatePicPost },
});

AppRegistry.registerComponent('PaprPlanes', () => PaprPlanes);
