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
import backarrow from '../Resources/backarrow.png';


class CreateTextPost extends React.Component {
  render(){

const { navigate } = this.props.navigation;

return (
  <View style = {style.View3}>
  <View style = {style.PostCreateHeader}>
    <View style = {style.LeftContainer}>
      <View style = {style.LeftArrow}>
        <Image source={backarrow} style={style.LeftArrow}/>
      </View>
    </View>
    <TouchableOpacity style = {style.MiddleContainer} onPress={() => { navigate('')}} ><LogInText>Text Post</LogInText></TouchableOpacity>
    <View style = {style.RightContainer}></View>
  </View>
  <View style = {style.container2}>
  <TextInput style = {style.TextField} placeholder = 'Text' autoCapitalize = 'none'/>
  <TextInput style = {style.TextField} placeholder = 'Caption' autoCapitalize = 'none' />
  </View>
  <View style = {style.container}>
  <TouchableOpacity style = {style.SignUp2} onPress={() => { navigate('PostPassMain')}} ><LogInText>Submit</LogInText></TouchableOpacity>
</View>
  </View>
    );
  }

}

export default CreateTextPost;
