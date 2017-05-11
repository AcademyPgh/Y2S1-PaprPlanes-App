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
class EnterDateOfBirth extends React.Component {

componentDidMount(){
  this.props.setLocked();
}

 render() {
const { navigate } = this.props.navigation;
return(
<View style = {style.View4}>
<View style = {style.CounterBoxMain}>
  <LogInText>&#10094;</LogInText><Image style = {style.HeaderLogo} source = {logo}/>
</View>
<View style = {style.Email2}>
<View style = {style.container5}>
<PlaneText2>What is your Birthdate?</PlaneText2>
    <TextInput value={this.props.currentDateOfBirth} onChangeText={this.props.changeDateOfBirth} style = {style.TextField4} placeholder = 'Birthdate' placeholderTextColor = "#D6D6D6" autoCapitalize = 'none'/>
     </View>
     </View>
     <View>
     <TouchableOpacity onPress={() => { navigate('Main')}} ><Image source ={arrow}/></TouchableOpacity>
     </View>
</View>
);
}
}
export default EnterDateOfBirth;
