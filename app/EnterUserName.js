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

 class EnterUserName extends React.Component {
   static navigationOptions = {
     headerStyle:{ backgroundColor: '#373435'},
     headerTitleStyle:{ color: '#FFF', fontFamily: 'Avenir'},
     title: 'Sign Up',
     barButtonIconStyle: {tintColor: '#FFF'},
   };
 render() {
   return (
     <View style = {style.View4}>
     <View style = {style.CounterBoxMain}>
       <Image style = {style.HeaderLogo} source = {logo}/>
     </View>
     <View style = {style.Email2}>
     <View style = {style.container5}>
     <PlaneText2>What is your name?</PlaneText2>
         <TextInput value={this.props.currentFullName} onChangeText={this.props.changeFullName} style = {style.TextField4} placeholder = 'Full Name' placeholderTextColor = "#D6D6D6" autoCapitalize = 'none'/>
          </View>
          </View>
          <View style = {style.swipe2}>
          <LogInText>&#10094; Swipe Left to Continue</LogInText>
          </View>
     </View>
   );
 }
}
export default EnterUserName;
