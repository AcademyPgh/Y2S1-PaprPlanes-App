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
import style from '../styles/style';
import {PlaneText, PlaneText2, textText, LogInText} from '../styles/PlaneText';
import logo from '../Resources/logo-200.png';
import backarrow from '../Resources/backarrow.png';


 class EnterUserName extends React.Component {
   static navigationOptions = {
     headerStyle:{ backgroundColor: '#373435'},
     headerTitleStyle:{ color: '#FFF', fontFamily: 'Avenir'},
     title: 'Sign Up',
     barButtonIconStyle: {tintColor: '#FFF'},
     header: (navigation, header) => { return (<Text style={{ backgroundColor: '#373435', marginTop: 20, alignItems: 'center'}}><Image source={logo} style={{width: 50, height: 50}} />Sign Up</Text>) },

   };
 render() {
   return (
     <View style = {style.View4}>
      <View style = {style.CounterBoxMain}>
         <View style = {style.HeaderLogo}>
         </View>
      </View>
      <View style = {style.Email2}>
         <View style = {style.container5}>
           <PlaneText2>What is your name?</PlaneText2>
           <TextInput value={this.props.currentFullName} onChangeText={this.props.changeFullName} style = {style.TextField4} placeholder = 'Full Name' placeholderTextColor = "#D6D6D6" autoCapitalize = 'none'/>
         </View>
      </View>
         <View style = {style.swipe3}>
           <Image source={backarrow} style={style.swipeArrow}/>
           <View style={style.swipeText} ><LogInText>Swipe to Continue</LogInText>
           </View>
         </View>
    </View>
   );
 }
}
export default EnterUserName;
