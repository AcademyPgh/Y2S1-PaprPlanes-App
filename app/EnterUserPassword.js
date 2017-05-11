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
  header: (navigation, header) => { return (<Text style={{ backgroundColor: '#373435', marginTop: 20}}><Image source={logo} style={{width: 50, height: 50, alignItems: 'center'}} />Sign Up</Text>) },
};
 render() {
   return(
   <View style = {style.View4}>
   <View style = {style.CounterBoxMain}>
     <View style = {style.HeaderLogo}>
     </View>
   </View>
   <View style = {style.Email2}>
   <View style = {style.container5}>
   <PlaneText2>What is your password?</PlaneText2>
       <TextInput value={this.props.currentPassword} onChangeText={this.props.changePassword} style = {style.TextField4} placeholder = 'Password' placeholderTextColor = "#D6D6D6" autoCapitalize = 'none'/>
        </View>
        </View>
        <View style = {style.swipe2}>
        <LogInText>&#10094; Swipe to Continue</LogInText>
        </View>
   </View>
 );
 }
 }

export default EnterUserPassword;
