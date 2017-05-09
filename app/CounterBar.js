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

import PostCount from './getPost'
import TotalCount from './getUser'
import style from './style'

class CounterBar extends React.Component {
  constructor(props){
   super(props);

   const posttemp = PostCount()
   const totaltemp = TotalCount()

   this.state={
     PostCount: posttemp,
     TotalCount: totaltemp
   }
 }

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
