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
import style from '../styles/style';
import {PlaneText, PlaneText2, textText, LogInText} from '../styles/PlaneText';
import PostPassMain from '../PostPass/PostPassMain';
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
  <View>
  <TouchableOpacity style = {style.SignUp3} onPress={() => { navigate('OurCamera')}}><LogInText>Take a Photo</LogInText></TouchableOpacity>
  <TouchableOpacity style = {style.SignUp4} onPress={() => { navigate('MyCameraRoll')}}><LogInText>Camera Roll</LogInText></TouchableOpacity>
  </View>
    <View style = {style.container2}>
      <TextInput style = {style.TextField} placeholder = 'Caption' autoCapitalize = 'none' />
      </View>
    <View style = {style.container}>
      <TouchableOpacity style = {style.SignUp2} onPress={() => { navigate('PostPassMain', {PostInfo: ''})}} ><LogInText>Send</LogInText></TouchableOpacity>
    </View>
  </View>
    );
  }

}

export default CreatePicPost;
