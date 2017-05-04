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

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { StackNavigator } from 'react-navigation';
import Main from './Main';
import SignUp from './SignUp';
import LogIn from './LogIn';
import CreateTextPost from './CreateTextPost'
import CreateLinkPost from './CreateLinkPost'
import CreatePicPost from './CreatePicPost'
import style from './style'
import logo from '../Resources/logo-200.png'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Greeting Screen',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {style.View}>
      <View style = {style.Pic}>
      <Image source = {logo}/>
      <Text style = {style.Prompt}>Papr Plane</Text>
      </View>
        <View style = {style.container}>
      <View style = {style.LogIn}>
        <Button onPress={() => { navigate('LogIn')}} title="LogIn"></Button>
        </View>
        <View style = {style.SignUp}>
        <Button onPress={() => { navigate('SignUp')}} title="SignUp"></Button>
        </View>
      {/*test button will remove later*/}
      <View>
        <Button onPress={() => { navigate('Main')}} title="Main Screen"></Button>
        </View>
        </View>
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
