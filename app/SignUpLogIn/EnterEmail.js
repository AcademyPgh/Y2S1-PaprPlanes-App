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


 class EnterEmail extends React.Component {


componentDidMount(){
  this.props.setLocked();
}

 render() {
     return(
     <View style = {style.View4}>
        <View style = {style.CounterBoxMain}>
          <View style = {style.HeaderLogo}>
          </View>
        </View>
        <View style = {style.Email2}>
          <View style = {style.container5}>
              <PlaneText2>What is your Email?</PlaneText2>
              <TextInput value={this.props.currentEmail} onChangeText={this.props.changeEmail} style = {style.TextField4} placeholder = 'Email' placeholderTextColor = "#D6D6D6" autoCapitalize = 'none'/>
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
export default EnterEmail;
