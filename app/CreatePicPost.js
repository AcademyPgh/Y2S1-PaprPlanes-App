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
import backarrow from '../Resources/backarrow.png'


class CreatePicPost extends React.Component {

  static navigationOptions = {
    headerStyle:{ backgroundColor: '#373435', marginTop: 20},
    headerTitleStyle:{ color: '#FFF', fontFamily: 'Avenir'},
    title: 'Picture Post',
  }

  render(){
const {navigate} = this.props.navigation;
return (
  <View style = {style.View3}>
    <View style = {style.container2}>
      <TextInput style = {style.TextField} placeholder = 'Caption' autoCapitalize = 'none' />
      <Button onPress={() => { navigate('OurCamera')}} title='Take a Photo'></Button>
      <Button onPress={() => { navigate('MyCameraRoll')}} title='Camera Roll'></Button>
    </View>
    <View style = {style.container}>
      <TouchableOpacity style = {style.SignUp2} onPress={() => { navigate('PostPassMain', {PostInfo: ''})}} ><LogInText>Send</LogInText></TouchableOpacity>
    </View>
  </View>
    );
  }

}

export default CreatePicPost;
