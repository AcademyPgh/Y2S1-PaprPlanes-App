import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import style from './style';
import {PlaneText, PlaneText2, textText, LogInText} from './PlaneText';
import logo from '../Resources/logo-200.png';

 class EnterUserPassword extends React.Component {
componentDidMount(){
  this.props.setLocked();
}
static navigationOptions = {
  headerStyle:{ backgroundColor: '#373435'},
  headerTitleStyle:{ color: '#FFF', fontFamily: 'Avenir'},
};
 render() {
   return(
   <View style = {style.View4}>
   <View style = {style.CounterBoxMain}>
     <LogInText>&#10094;</LogInText><Image style = {style.HeaderLogo} source = {logo}/>
   </View>
   <View style = {style.Email2}>
   <View style = {style.container5}>
   <PlaneText2>What is your password?</PlaneText2>
       <TextInput value={this.props.currentPassword} onChangeText={this.props.changePassword} style = {style.TextField4} placeholder = 'Password' placeholderTextColor = "#D6D6D6" autoCapitalize = 'none'/>
        </View>
        </View>
        <View style = {style.swipe2}>
        <LogInText>&#10094; Swipe Left to Continue</LogInText>
        </View>
   </View>
 );
 }
 }

export default EnterUserPassword;
