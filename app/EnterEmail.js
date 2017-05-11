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


 class EnterEmail extends React.Component {


componentDidMount(){
  this.props.setLocked();
}

 render() {
     return(
     <View style = {style.View4}>
     <View style = {style.CounterBoxMain}>
       <LogInText>&#10094;</LogInText><Image style = {style.HeaderLogo} source = {logo}/>
     </View>
     <View style = {style.Email2}>
     <View style = {style.container5}>
     <PlaneText2>What is your Email?</PlaneText2>
         <TextInput value={this.props.currentEmail} onChangeText={this.props.changeEmail} style = {style.TextField4} placeholder = 'Email' placeholderTextColor = "#D6D6D6" autoCapitalize = 'none'/>
          </View>
          </View>
          <View style = {style.swipe2}>
          <LogInText>&#10094; Swipe Left to Continue</LogInText>
          </View>
     </View>
   );
   }
   }
export default EnterEmail;
