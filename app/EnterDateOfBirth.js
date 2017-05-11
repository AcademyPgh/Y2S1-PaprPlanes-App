import React, { Component } from 'react';
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
import { StackNavigator } from 'react-navigation';
import style from './style';
import {PlaneText, PlaneText2, textText, LogInText} from './PlaneText';
import logo from '../Resources/logo-200.png';
import arrow from '../Resources/arrowcontinue.png';
import Welcome from './Welcome';

class EnterDateOfBirth extends React.Component {

componentDidMount(){
  this.props.setLocked();
}

 render() {
const { navigate } = this.props.navigation;
return(
<View style = {style.BirthdayView}>
<View style = {style.CounterBoxMain}>
  <View style = {style.HeaderLogo}>
  </View>
  </View>
<View style = {style.Email2}>
<View style = {style.container5}>
<PlaneText2>What is your Birthday?</PlaneText2>
    <TextInput value={this.props.currentDateOfBirth} onChangeText={this.props.changeDateOfBirth} style = {style.TextField4} placeholder = 'Birthday' placeholderTextColor = "#D6D6D6" autoCapitalize = 'none'/>
     </View>
     </View>
     <View style = {style.swipe2}>
     <TouchableOpacity onPress={() => { navigate('Welcome')}} ><Image source ={arrow}/></TouchableOpacity>
     </View>
</View>
);
}
}
export default EnterDateOfBirth;
