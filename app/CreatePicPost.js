import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { StackNavigator } from 'react-navigation';
import style from './style';
import PlaneText from './PlaneText';
import {LogInText, textText} from './textText';

class CreatePicPost extends React.Component {
  render(){

return (
  <View style = {style.View3}>
  <View style = {style.CounterBoxMain}>
  <View style = {style.LeftContainer}>
    <LogInText>&#10094;</LogInText><Image style = {style.HeaderLogo} source = {logo}/>
  </View>
    <View style = {style.RightContainer}></View>
  </View>
  <View style = {style.container}>
  <TouchableOpacity style = {style.SignUp2} onPress={() => { navigate('Main')}} ><LogInText>Send</LogInText></TouchableOpacity>
</View>
  </View>
    );
  }

}

export default CreatePicPost;
