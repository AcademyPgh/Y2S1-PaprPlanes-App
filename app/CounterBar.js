import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';

import style from './style'

class CounterBar extends React.Component {
  render(){
    return (
      <View style = {style.CounterBoxMain}>
      <View style = {style.LeftContainer}>
        <Text style = {style.CounterLeft}>Left Counter</Text>
        </View>
      <Image source={require('../Resources/mac&c.jpg')} style={style.ProfilePic}/>
      <View style = {style.RightContainer}>
        <Text style = {style.CounterRight}>Right Counter</Text>
        </View>
    </View>
    );
  }

}


export default CounterBar;
