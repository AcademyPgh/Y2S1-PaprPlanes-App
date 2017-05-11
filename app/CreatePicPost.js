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
import PostPassMain from'./PostPassMain';
import OurCamera from './OurCamera';
import MyCameraRoll from './MyCameraRoll';

class CreatePicPost extends React.Component {
  render(){
const {navigate} = this.props.navigation;
return (
  <View style = {style.View3}>
  <View style = {style.CounterBoxMain}>
  <View style = {style.LeftContainer}>
  <LogInText> &#10094; </LogInText>
  </View>
    <TouchableOpacity style = {style.MiddleContainer} onPress={() => { navigate('SignUp')}} ><LogInText>Log In</LogInText></TouchableOpacity>
    <View style = {style.RightContainer}></View>

  </View>
  <TextInput style = {style.TextField} placeholder = 'Caption' autoCapitalize = 'none' />
  <Button onPress={() => { navigate('OurCamera')}} title='Take a Photo'></Button>
  <Button onPress={() => { navigate('MyCameraRoll')}} title='Camera Roll'></Button>
  <View style = {style.container}>
  <TouchableOpacity style = {style.SignUp2} onPress={() => { navigate('PostPassMain')}} ><LogInText>Send</LogInText></TouchableOpacity>
</View>
  </View>
    );
  }

}

export default CreatePicPost;
