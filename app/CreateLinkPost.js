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
import {PlaneText, PlaneText2, textText, LogInText} from './PlaneText';

class CreateLinkPost extends React.Component {
  static navigationOptions = {
    headerStyle:{ backgroundColor: '#373435'},
    headerTitleStyle:{ color: '#FFF'},
    title: 'Link Post',
}
  render(){

const { navigate } = this.props.navigation;
return (
  <View style = {style.View3}>
  <View style = {style.container2}>
  <TextInput style = {style.TextField} placeholder = 'Link' autoCapitalize = 'none'/>
  <TextInput style = {style.TextField} placeholder = 'Caption' autoCapitalize = 'none' />
  <TextInput style = {style.TextField3} placeholder = 'Web Preview' autoCapitalize = 'none' />
  </View>
  <View style = {style.container}>
  <TouchableOpacity style = {style.SignUp2} onPress={() => { navigate('PostPassMain')}} ><LogInText>Send</LogInText></TouchableOpacity>
</View>
  </View>

    );
  }

}

export default CreateLinkPost;
